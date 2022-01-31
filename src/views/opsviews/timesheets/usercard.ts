import { layout } from "../.."
import opstimenav from "../../components/layout/opstimenav"

export default function usercard(): string {
  return layout(`${opstimenav()}
  <div class="page-container">
  <div class="user-card-container">
    title (name)
  <div>
  </div>
  <script type="text/javascript" src="/js/usercard.js"></script>
  `)
}