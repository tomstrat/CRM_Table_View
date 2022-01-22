import layout from "../../layout"
import dayselect from "../../components/timepage/dayselect"
import timeform from "../../components/timepage/timeform"

export default function ttmhours(): string {
    return layout(` 
        ${dayselect()}
        ${timeform()}
                
    `)
}