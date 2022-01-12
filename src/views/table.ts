import * as R from "ramda"
import layout from "./layout"

interface Sfobject {
    Name: string
}

interface Sfdata {
    records: Sfobject[]
}

function formatProp(prop: string) {
    return `${prop.split("__")[0].replace("_", " ")}`
}

function formatRow<T>(row: T) {
    let data = ""
    for (const prop in row) {
        data += `<td>${row[prop]}</td>`
    }
    return data
}

export function tableViewBuilder(sfdata: Sfdata) {
    const dataArray = sfdata.records as Array<Sfobject>

    var headers = ""
    for (const prop in dataArray[0]) {
        headers += `<td>${formatProp(prop)}</td>`
    }
    const renderedData = dataArray.map(record => {
        return `
            <tr>
                ${formatRow(record)}
            </tr>
        `
    }).join("")

    const page = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <title>Document</title>
    </head>
    <body>
        <table>
            <thead>
                <tr>
                    ${headers}
                </tr>
            </thead>
            <tbody>
                ${renderedData}
            </tbody>
        </table>    
    </body>
    </html>`

    return layout(page)
}

