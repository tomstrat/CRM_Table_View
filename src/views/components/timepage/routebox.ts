export default function routeBox(routeName: string, routeType: string): string {
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
  `
}