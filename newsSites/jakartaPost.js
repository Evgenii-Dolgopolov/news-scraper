import { newsScraper } from "../newsScraper.js"

const url = "https://www.thejakartapost.com/business/latest" 

const articleSelectors = [".latestDetail"]
const titleSelectors = ["h2"]
const linkSelectors = ["a:nth-of-type(2)"]
const contentSelectors = [".tjp-single__content"] // Update this selector based on actual content selector
const websiteName = 'The Jakarta Post'

const jakartaPost = async () => {
  await newsScraper(url, articleSelectors, titleSelectors, linkSelectors, contentSelectors, websiteName)
}

export { jakartaPost }