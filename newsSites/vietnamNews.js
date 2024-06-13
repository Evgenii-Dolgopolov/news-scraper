import { newsScraper } from "../newsScraper.js"

const url = "https://vietnamnews.vn/economy"

const articleSelectors = [".story"]
const titleSelectors = [".story__title"]
const linkSelectors = [".story__thumb"]
const contentSelectors = ["#abody"] // Update this selector based on actual content selector
const websiteName = 'Vietnam News'

const vietnamNews = async () => {
  await newsScraper(url, articleSelectors, titleSelectors, linkSelectors, contentSelectors, websiteName)
}

export { vietnamNews }