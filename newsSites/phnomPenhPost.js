import { newsScraper } from "../newsScraper.js"

const url = "https://www.phnompenhpost.com/business"

const articleSelectors = [".latest-news li"]
const titleSelectors = ["a"]
const linkSelectors = ["a"]
const contentSelectors = [".article-text"] // Update this selector based on actual content selector
const websiteName = 'Phnom Penh Post'

const phnomPenhPost = async () => {
  await newsScraper(url, articleSelectors, titleSelectors, linkSelectors, contentSelectors, websiteName)
}

export { phnomPenhPost }