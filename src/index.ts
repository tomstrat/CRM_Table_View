import inject from "./registry"

const app = inject()
  .then(app => {
    app.listen(
      3001,
      () => console.log("Server has started on http://localhost:3001")
    )
  })
  .catch(err => {
    console.log(err)
  })


