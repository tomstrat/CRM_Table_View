"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function routeBox(routeName, routeType) {
    return `
  <form class="route-box schedule-element">
    <input class="route-name" value="${routeName}"></input>
    <div class="route-type">${routeType}</div>
    <div class="crew-member">
      placeholder
    </div>
    <div class="crew-member">
      placeholder
    </div>
  </form>
  `;
}
exports.default = routeBox;
