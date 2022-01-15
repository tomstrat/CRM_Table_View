import layout from "./layout"
import Config from "../config/config"

export default function loginPage(): string {
  const { authorizeFull } = Config.urls
  return layout(`
    <div class="login">
      <button onclick="window.location.replace('${authorizeFull}')">Login</button>
    </div>
  `)
}