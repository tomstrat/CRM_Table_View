export default function scheduletopbar(): string {
  return `
  <div class="top-bar-container">
  <form class="top-bar-form" name="route-form" id="route-form">
    <button class="route-button schedule-element" id="route-button" name="route-submit" action="submit">Add route</button>
    <select name="routeType" id="route-type" class="new-user-drop new-user-element">
            <option value="Standard">Standard</option>
            <option value="Training">Training</option>
            <option value="Certification">Certification</option>
            <option value="Float">Float</option>
            <option value="Depot">Depot</option>
    <input class="text-box schedule-element" id="routeName" name="routeName" type="text" placeholder="route-name" required>
  </form>
  </div>
  `
}