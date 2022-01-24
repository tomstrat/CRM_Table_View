import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"

export default function opsoverview(): string {
    return layout(`
    ${opstimenav()}
    <div class ="page-container">
        <div class="dayheader-container">
            <h2>Current day</h2>
            <div class="date-select-container">
            <label for="day">Select day</label>
            <input type="date" name="day"
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31">
            </div>
        </div>
            <div class="overview-container">
                <div class="overview-subcontainer">
                <h2>Rostered staff</h2>
                <h1>0</h1>
                    </div>
                <div class="overview-subcontainer">
                    <h2>Potentially available</h2>
                    <h1>0</h1>
                </div>
                <div class="overview-subcontainer">
                    <h2>More info</h2>
                    <h1>0</h1>
                </div>
            </div>
    </div>
    `)
}