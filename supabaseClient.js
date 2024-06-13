import dotenv from "dotenv"
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

import { createClient } from "@supabase/supabase-js"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
