import { Result } from "express-validator"
import { ValidationError } from "express-validator"
import { ViewWithErrors } from "../../types/views"

export default function sidebar(
  title: string,
  components: ViewWithErrors,
  errors?: Result<ValidationError> | undefined
): string {
  return (`
      <div class="sidebar">
        <div class="sidebar-title">
          <h2>${title}</h2>
        </div>
        <div class="sidebar-components">
            ${components({ errors })}
        </div>
      </div>
    `)
}