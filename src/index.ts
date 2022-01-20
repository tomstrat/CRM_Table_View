import inject from "./registry"

const app = inject()
  .then(app => {
    app.listen(
      3000,
      () => console.log("Server has started on http://localhost:3000")
    )
  })
  .catch(err => {
    console.log(err)
  })


