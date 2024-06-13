import { newsScraper } from "../newsScraper.js"

const url = "https://www.indonesia-investments.com/news/todays-headlines/item26" 

const articleSelectors = ["article"]
const titleSelectors = ["h1"]
const linkSelectors = ["h1 a"]
const contentSelectors = [".inner"] // Update this selector based on actual content selector
const websiteName = 'Indonesia Investments'

const indonesiaInvestments = async () => {
  await newsScraper(url, articleSelectors, titleSelectors, linkSelectors, contentSelectors, websiteName)
}

export { indonesiaInvestments }