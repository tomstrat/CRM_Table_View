interface Sfobject {
    Name: string
}

interface Sfdata {
    records: Sfobject[]
}

export default function tableViewBuilder(sfdata: Sfdata){
    const dataArray =  sfdata.records as Array<Sfobject> 
    const renderedData = dataArray.map(record => {
        return `
            <tr>
                <td>${record}</td>
            </tr>
        `
    }).join("")

    return `<!DOCTYPE html>
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
            ${renderedData}
        </table>    
    </body>
    </html>`
}

