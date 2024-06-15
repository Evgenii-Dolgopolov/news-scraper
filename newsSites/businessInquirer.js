import { newsScraper } from "../newsScraper.js"

const url = "https://business.inquirer.net" 

const articleSelectors = ["#ncg-box"]
const titleSelectors = ["h1"]
const linkSelectors = ["a"]
const contentSelectors = ["#article_content"] // Update this selector based on actual content selector
const websiteName = 'Business Inquirer'

const businessInquirer = async () => {
  await newsScraper(url, articleSelectors, titleSelectors, linkSelectors, contentSelectors, websiteName)
}

export { businessInquirer }