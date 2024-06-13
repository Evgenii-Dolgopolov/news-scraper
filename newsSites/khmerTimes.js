import { newsScraper } from "../newsScraper.js"

const url = "https://www.khmertimeskh.com/category/business/" 

const articleSelectors = ["article"]
const titleSelectors = ["h2"]
const linkSelectors = ["a"]
const contentSelectors = [".entry-content"] // Update this selector based on actual content selector
const websiteName = 'Khmer Times'

const khmerTimes = async () => {
  await newsScraper(url, articleSelectors, titleSelectors, linkSelectors, contentSelectors, websiteName)
}

export { khmerTimes }