import layout from "../../layout"
import dayselect from "../../components/timepage/dayselect"
import timeform from "../../components/timepage/timeform"
import timenav from "../../components/layout/timenav"

export default function ttmhours(): string {
    return layout(` 
        ${timenav()}
        ${dayselect()}
        ${timeform()}
                
    `)
}