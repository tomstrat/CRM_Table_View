import "https://deno.land/x/dotenv/load.ts";
// import { serveTls } from "https://deno.land/std/http/mod.ts";

import {opine, OpineRequest, OpineResponse} from "./deps.ts"

const app = opine()

const redirect = `https://login.salesforce.com/services/oauth2/authorize?client_id=${Deno.env.get("CONSUMER_KEY")}&redirect_uri=http://localhost:3000/oauth2/callback&response_type=code`

// const key = "../keys/key.pem"
// const cert = "../keys/cert.pem"

app.get("/", (req: OpineRequest, res: OpineResponse) => {
  res.send(`<button onclick="window.location.replace('${redirect}')">Login</button>`)
})

app.get("/oauth2/callback", (req: OpineRequest, res: OpineResponse) => {
  res.send(req.params.code)
})

// function reqHandler(req: Request) {
//   return new Response("Secure Hello world");
// }

// serveTls(reqHandler, {port: 3000, cert, key})
// console.log("Server has started on https://localhost:3000")

app.listen(
  3000,
  () => console.log("Server has started on http://localhost:3000")
)

