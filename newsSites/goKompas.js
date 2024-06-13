import { newsScraper } from "../newsScraper.js"

const url = "https://go.kompas.com/business"

const articleSelectors = [".trenLatest__item"]
const titleSelectors = ["h3"]
const linkSelectors = ["a"]
const contentSelectors = [".read__content"] // Update this selector based on actual content selector
const websiteName = 'Go Kompas'

const goKompas = async () => {
  await newsScraper(url, articleSelectors, titleSelectors, linkSelectors, contentSelectors, websiteName)
}

export { goKompas }