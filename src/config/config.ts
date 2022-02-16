import dotenv from "dotenv"
dotenv.config()


export default {
  urls: {
    authorize: "https://login.salesforce.com/services/oauth2/authorize",
    authorizeFull: `https://login.salesforce.com/services/oauth2/authorize?client_id=${process.env.CONSUMER_KEY}&redirect_uri=http://localhost:3000/oauth2/callback&response_type=code`,
    token: "https://spotlightdevelopment2-dev-ed.my.salesforce.com/services/oauth2/token",
    data: "https://spotlightdevelopment2-dev-ed.my.salesforce.com/services/data/",
    domain: "https://spotlightdevelopment2-dev-ed.my.salesforce.com",
    redirect: "http://localhost:3000/oauth2/callback"
  },
  environment: {
    secure: false
  },
  database: {
    url: `postgres://${process.env.PROD_DB_USER}:${process.env.PROD_DB_PASS}@rosie.db.elephantsql.com/${process.env.PROD_DB_USER}`,
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [
      "dist/database/models/**/*.js"
    ],
    migrations: [
      "dist/database/migrations/**/*.js"
    ],
    subscribers: [
      "dist/database/subscribers/**/*.js"
    ],
  },
  testDatabase: {
    database: ":memory:",
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [
      "src/database/models/**/*.ts"
    ],
    migrations: [
      "src/database/migrations/**/*.ts"
    ],
    subscribers: [
      "src/database/subscribers/**/*.ts"
    ],
  }
}