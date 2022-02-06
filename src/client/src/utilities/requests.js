import { filter } from "ramda"

export function handleSubmitFactory(data, callback) {
  return async function handleSubmit(event) {
    event.preventDefault()
    try {
      const form = event.currentTarget
      const {action, method} = form
      const body = filter((val) => val != "", data)
      const response = await fetch(action, {
        method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      })
      callback(response)
    } catch (error) {
      console.log(error)
    }
  }
}