import layout from "./layout"
import { BaseError } from "../models/error"

export default function errorPage(err: BaseError): string {
  return layout(`
    <div class="error">
      <h1>Whoops! Something Went Wrong!</h1>
      <h2>Code: ${err.getCode()}</h2>
      <h3>Message: ${err.message}</h3>
    </div>
  `)
}