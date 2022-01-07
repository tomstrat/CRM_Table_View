import "https://deno.land/x/dotenv/load.ts";

import {opine, OpineRequest, OpineResponse} from "./deps.ts"

const app = opine()

app.get("/", (req: OpineRequest, res: OpineResponse) => {
  res.send("Hello")
})

app.listen(
  3000,
  () => console.log("Server has started on http://localhost:3000")
)
// const SFURL = "https://spotlightdevelopment2-dev-ed.my.salesforce.com/services/oauth2/token"

// const token = await fetch(SFURL, {
//   method: "POST",
//   body: `grant_type=client_credentials&client_id=${Deno.env.get("CONSUMER_KEY")}&client_secret=${Deno.env.get("CONSUMER_SECRET")}`,
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   }
// })
