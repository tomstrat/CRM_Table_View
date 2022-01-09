import "https://deno.land/x/dotenv/load.ts";

import {opine, OpineRequest, OpineResponse} from "./deps.ts"

const app = opine()

const codeRedirect = `https://login.salesforce.com/services/oauth2/authorize?client_id=${Deno.env.get("CONSUMER_KEY")}&redirect_uri=http://localhost:3000/oauth2/callback&response_type=code`
const tokenRedirect =`https://spotlightdevelopment2-dev-ed.my.salesforce.com/services/oauth2/token`

app.get("/", (req: OpineRequest, res: OpineResponse) => {
  res.send(`<button onclick="window.location.replace('${codeRedirect}')">Login</button>`)
})

app.get("/oauth2/callback", async (req: OpineRequest, res: OpineResponse) => {
  const tokenData = await fetch(tokenRedirect, {
    method: "POST",
    body: `grant_type=authorization_code&code=${req.query.code}&client_id=${Deno.env.get("CONSUMER_KEY")}&client_secret=${Deno.env.get("CONSUMER_SECRET")}&redirect_uri=https://localhost:3000/oauth2/callback`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  const token = await tokenData.json()
  console.log(token)

  const resourcesData = await fetch("https://spotlightdevelopment2-dev-ed.my.salesforce.com/services/data/v33.0/sobjects/Account/describe/compactLayouts", {
    headers: {
      "Authorization": `Bearer ${token.access_token}`
    }
  })

  const resources = await resourcesData.json()

  res.send(resources)
})

app.listen(
  3000,
  () => console.log("Server has started on http://localhost:3000")
)

