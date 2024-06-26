import puppeteer from "puppeteer"
import chromium from "chromium"
import { checkIfExistsInSupabase, storeDataInSupabase } from "./storeData.js"
import { convert } from "html-to-text"

const newsScraper = async (
  url,
  articleSelectors,
  titleSelectors,
  linkSelectors,
  contentSelectors,
  websiteName
) => {
  // Launch Puppeteer browser instance
  const browser = await puppeteer.launch({
    // config
    headless: true, // Set to true for running in CI environments
    args: ["--no-sandbox", "--disable-setuid-sandbox"], // Necessary for running in CI environments
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
    executablePath: process.env.CHROMIUM_PATH,
    ignoreHTTPSErrors: true,
  })

  // Create a new page
  const page = await browser.newPage()

  // Set specific timeouts for actions
  page.setDefaultNavigationTimeout(100000) // Navigation timeout
  page.setDefaultTimeout(100000) // Overall page timeout

  // Set user agent to prevent detection
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
  )

  try {
    // Navigate to the URL
    await page.goto(url, { waitUntil: "networkidle2", timeout: 100000 })
    console.log(`Going to URL: ${url}`)

    // Extract articles based on multiple selectors
    const articleLinks = await page.evaluate(
      (articleSels, titleSels, linkSels) => {
        const articles = []
        articleSels.forEach(articleSel => {
          document.querySelectorAll(articleSel).forEach(article => {
            titleSels.forEach(titleSel => {
              const titleElement = article.querySelector(titleSel)
              const urlElement = article.querySelector(linkSels)
              const title = titleElement ? titleElement.innerText : null
              const url = urlElement ? urlElement.href : null
              if (title && url) {
                articles.push({ title, url })
              }
            })
          })
        })
        return articles
      },
      articleSelectors,
      titleSelectors,
      linkSelectors
    )

    const allArticlesWithContent = []
    for (const article of articleLinks) {
      try {
        // Navigate to the article URL with a longer timeout
        await page.goto(article.url, {
          waitUntil: "networkidle2",
          timeout: 100000,
        })

        const content = await page.evaluate(contentSels => {
          for (let contentSel of contentSels) {
            const contentElement = document.querySelector(contentSel)
            if (contentElement) {
              return contentElement.innerHTML
            }
          }
          return null
        }, contentSelectors)

        const cleanedContent = content
          ? convert(content, {
              wordwrap: false,
              selectors: [
                { selector: "img", format: "skip" },
                { selector: "a", options: { ignoreHref: true } },
              ],
            })
              .replace(/\\n/g, " ")
              .replace(/\s+/g, " ")
              .trim()
          : null

        if (cleanedContent) {
          const articleData = {
            title: article.title,
            url: article.url,
            content: cleanedContent,
          }
          allArticlesWithContent.push(articleData)

          const exists = await checkIfExistsInSupabase(article.url)
          if (!exists) {
            await storeDataInSupabase(articleData)
          } else {
            // console.log(`Article with URL ${article.url} already exists. Skipping insertion.`);
          }
        } else {
          // console.log(`Article with URL ${article.url} has no content. Skipping insertion.`);
        }
      } catch (error) {
        console.error(
          `Error navigating to ${article.url} because ${error.message}`
        )
      }
    }
  } catch (error) {
    console.error(`Error navigating to ${url} because ${error.message}`)
  } finally {
    // Close the browser instance
    await browser.close()
    console.log(`SCRAPING FINISHED FOR ${websiteName}.`)
  }
}

export { newsScraper }
