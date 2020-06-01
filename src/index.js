import Controls from "./modules/controls.js"
import Geo from "./modules/geo.js"

window.onload = new Controls(document.getElementById("controls"))
window.onload = new Geo(document.querySelector(".coordinates"), document.querySelector("#map"))
