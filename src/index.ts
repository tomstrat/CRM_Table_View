import express from "express"
import authGetRouter from "./routes/auth/get"

const app = express()

app.use("/oauth2", authGetRouter)

app.listen(
  3000,
  () => console.log("Server has started on http://localhost:3000")
)

