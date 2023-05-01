"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dayselect() {
    return `
    <div class="day-container">
        <label for="day">Select day:</label>
        <input type="date" id="start" name="day"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
    </div>`;
}
exports.default = dayselect;
