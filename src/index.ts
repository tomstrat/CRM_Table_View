import inject from "./registry"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 3001

const app = inject()
  .then(app => {
    app.listen(
      PORT,
      () => console.log("Server has started on http://localhost:3001")
    )
  })
  .catch(err => {
    console.log(err)
  })


