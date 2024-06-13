import { newsScraper } from "../newsScraper.js"

const url = "https://en.tempo.co/news"

const articleSelectors = ["article"]
const titleSelectors = [".title"]
const linkSelectors = ["a"]
const contentSelectors = [".detail-in"] // Update this selector based on actual content selector
const websiteName = 'Tempo'

const tempo = async () => {
  await newsScraper(url, articleSelectors, titleSelectors, linkSelectors, contentSelectors, websiteName)
}

export { tempo }