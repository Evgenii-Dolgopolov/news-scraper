import { newsScraper } from "../newsScraper.js"

const url = "https://www.bworldonline.com/economy/"

const articleSelectors = [".item-details"]
const titleSelectors = ["h3"]
const linkSelectors = ["a"]
const contentSelectors = [".td-ss-main-content"] // Update this selector based on actual content selector
const websiteName = 'Business World (bworldonline)'

const businessWorld = async () => {
  await newsScraper(url, articleSelectors, titleSelectors, linkSelectors, contentSelectors, websiteName)
}

export { businessWorld }