import { bangkokPost } from "./newsSites/bangkokPost.js"
import { businessIndonesia } from "./newsSites/businessIndonesia.js"
import { tempo } from "./newsSites/tempo.js"
import { vietnamNews } from "./newsSites/vietnamNews.js"
import { businessWorld } from "./newsSites/businessWorld.js"
import { goKompas } from "./newsSites/goKompas.js"
import { phnomPenhPost } from "./newsSites/phnomPenhPost.js"
import { indonesiaBusinessPost } from "./newsSites/indonesiaBusinessPost.js"
import { khmerTimes } from "./newsSites/khmerTimes.js"
import { jakartaPost } from "./newsSites/jakartaPost.js"
import { indonesiaInvestments } from "./newsSites/indonesiaInvestments.js"
import { businessInquirer } from "./newsSites/businessInquirer.js"

const main = async () => {
  bangkokPost()
  businessIndonesia()
  tempo()
  vietnamNews()
  businessWorld()
  goKompas()
  phnomPenhPost()
  indonesiaBusinessPost()
  khmerTimes()
  jakartaPost()
  indonesiaInvestments()
  businessInquirer()
}
main()

// const urls = [
// "https://www.bangkokpost.com/business",
// "https://business-indonesia.org/news",
// "https://en.tempo.co",
// "https://vietnamnews.vn",
// "https://www.bworldonline.com",
// "http://go.kompas.com",
// "https://www.phnompenhpost.com/business",
// "https://indonesiabusinesspost.com",
// "https://www.khmertimeskh.com",
// "https://www.thejakartapost.com/business",
// "https://www.indonesia-investments.com/news",
// "https://business.inquirer.net/",
// ]
