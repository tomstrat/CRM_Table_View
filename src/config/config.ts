import dotenv from "dotenv"
dotenv.config()


export default {
  urls: {
    authorize: "https://login.salesforce.com/services/oauth2/authorize",
    authorizeFull: `https://login.salesforce.com/services/oauth2/authorize?client_id=${process.env.CONSUMER_KEY}&redirect_uri=http://localhost:3000/oauth2/callback&response_type=code`,
    token: "https://spotlightdevelopment2-dev-ed.my.salesforce.com/services/oauth2/token",
    data: "https://spotlightdevelopment2-dev-ed.my.salesforce.com/services/data/",
    redirect: "http://localhost:3000/oauth2/callback"
  },
  environment: {
    secure: false
  }
}