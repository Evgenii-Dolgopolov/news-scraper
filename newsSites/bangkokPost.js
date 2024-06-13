import { newsScraper } from "../newsScraper.js"

const url = "https://www.bangkokpost.com/business/investment"

// Example usage
const articleSelector = [".col-15"]
const titleSelector = ["h3"]
const linkSelector = ["a"]
const contentSelector = [".article-content"] // Update this selector based on actual content selector
const websiteName = 'Bangkok Post'

const bangkokPost = async () => {
  await newsScraper(url, articleSelector, titleSelector, linkSelector, contentSelector, websiteName)
}

export { bangkokPost }