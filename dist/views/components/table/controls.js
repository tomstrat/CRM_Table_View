"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function controls() {
    return `
    <div class="dropdown">
        <button class="button">Select Timeframe</button>
            <div class="dropdown-content">
                <a href="Today">Today</a>
                <a href="Week to date">Week to date</a>
                <a href="Month to date">Month to date</a>
                <a href="Quarter to date">Quarter to date</a>
                <a href="Year to date">Year to date</a>
                <a href="All Recorded History">All Recorded History</a>
                </div>
                </div>
    `;
}
exports.default = controls;
