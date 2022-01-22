import layout from "../../layout"
import timeform from "../../components/timepage/timeform"
import timenav from "../../components/layout/timenav"
import calendar from "../../components/timepage/calendar"

export default function ttmhours(): string {
    return layout(` 
        ${timenav()}
        ${calendar()}
        ${timeform()}
                
    `)
}