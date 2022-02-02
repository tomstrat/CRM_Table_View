export function handleSubmitFactory(callback) {
  return async function handleSubmit(event) {
    event.preventDefault()
    try {
      const form = event.currentTarget
      const {action, method} = form
      const formData = new FormData(form)
      const plainFormData = Object.fromEntries(formData.entries())
      const body = JSON.stringify(plainFormData)
      const response = await fetch(action, {
        method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body,
      })
      callback(response)
    } catch (error) {
      console.log(error)
    }
  }
}