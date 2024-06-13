import { newsScraper } from "../newsScraper.js"

const url = "https://indonesiabusinesspost.com/"

const articleSelectors = [".elementor-element-populated"]
const titleSelectors = ["h1 a"]
const linkSelectors = ["h1 a"]
const contentSelectors = [".elementor-widget-theme-post-content"] // Update this selector based on actual content selector
const websiteName = 'Indonesia Business Post'

const indonesiaBusinessPost = async () => {
  await newsScraper(url, articleSelectors, titleSelectors, linkSelectors, contentSelectors, websiteName)
}

export { indonesiaBusinessPost }