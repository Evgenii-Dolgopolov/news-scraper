import supabase from "./supabaseClient.js"

const checkIfExistsInSupabase = async url => {
  try {
    const { data, error } = await supabase
      .from("news_articles")
      .select("id")
      .eq("url", url)
    if (error) {
      console.error("Error checking for existing URL:", error.message)
      return false
    }
    return data.length > 0
  } catch (error) {
    console.error(`Error: ${error.message}`)
    return false
  }
}

const storeDataInSupabase = async data => {
  try {
    const { error } = await supabase.from("news_articles").insert([data])
    if (error) {
      console.error("Error inserting data:", error.message)
    } else {
      // console.log("Data inserted successfully")
    }
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

export { storeDataInSupabase, checkIfExistsInSupabase }
