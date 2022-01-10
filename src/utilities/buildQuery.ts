import Config from "../config/config"

interface QueryObject {
  resource: string
  version: string
  fields: string[]
}

export function buildQuery(query: QueryObject): string {

  const fieldQuery = query.fields.reduce((current, next, index) => {
    return index + 1 == query.fields.length ? current + `+${next}` : current + `+${next},`
  }, `${Config.urls.data}${query.version}/query?q=SELECT`)

  return `${fieldQuery}+from+${query.resource}`
}