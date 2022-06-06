export function formatErrors(errors) {
  return errors.reduce((current, next) => {
    current[next.param] = next.msg
    return current
  }, {})
}