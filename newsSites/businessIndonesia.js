import { newsScraper } from "../newsScraper.js"

const url = "https://business-indonesia.org/news/search?offset=5&page=1"

const articleSelectors = [".col-xs-12", ".col-md-12"]
const titleSelectors = [".__text-title"]
const linkSelectors = ["a"]
const contentSelectors = ["div:not([class])"] // Update this selector based on actual content selector
const websiteName = 'Business Indonesia'

const businessIndonesia = async () => {
  await newsScraper(url, articleSelectors, titleSelectors, linkSelectors, contentSelectors, websiteName)
}

export { businessIndonesia }