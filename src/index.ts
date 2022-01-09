import dotenv from "dotenv"
import express, {Request, Response} from "express"
import got from "got"

dotenv.config()
const app = express()

const codeRedirect = `https://login.salesforce.com/services/oauth2/authorize?client_id=${process.env.CONSUMER_KEY}&redirect_uri=http://localhost:3000/oauth2/callback&response_type=code`
const tokenRedirect =`https://spotlightdevelopment2-dev-ed.my.salesforce.com/services/oauth2/token`

app.get("/", (req: Request, res: Response) => {
  res.send(`<button onclick="window.location.replace('${codeRedirect}')">Login</button>`)
})

app.get("/oauth2/callback", async (req: Request, res: Response) => {
  const tokenData = await got.post(tokenRedirect, {
    method: "POST",
    body: `grant_type=authorization_code&code=${req.query.code}&client_id=${process.env.CONSUMER_KEY}&client_secret=${process.env.CONSUMER_SECRET}&redirect_uri=https://localhost:3000/oauth2/callback`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  const token = JSON.parse(tokenData.body).access_token
  console.log(token)

  const resourcesData = await got.get("https://spotlightdevelopment2-dev-ed.my.salesforce.com/services/data/v33.0/sobjects/Account/describe/compactLayouts", {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  const resources = JSON.parse(resourcesData.body)

  res.send(resources)
})

app.listen(
  3000,
  () => console.log("Server has started on http://localhost:3000")
)

