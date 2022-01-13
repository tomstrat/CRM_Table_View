import { InternalDataFormat } from "../models/internal.interfaces"
import layout from "./layout"


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

export function tableViewBuilder(sfdata: InternalDataFormat) {
    const dataArray = sfdata.records

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

    const page = `
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
    `

    return layout(page)
}

