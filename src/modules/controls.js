import Option from "./option.js"

export default class Controls {
  constructor(parent) {
    this.createControls(parent);
    this.changeBg();
  }

  createControls(parent) {
    this.bgButton = document.createElement("button");
    this.bgButton.textContent = "Change";
    this.langButton = document.createElement("select");
    this.tempButton = document.createElement("select");
    new Option(this.langButton, "Eng")
    new Option(this.langButton, "PL")
    new Option(this.tempButton, "F")
    new Option(this.tempButton, "C")
    parent.appendChild(this.bgButton);
    parent.appendChild(this.langButton);
    parent.appendChild(this.tempButton);
  }

  changeBg() {
    const main = document.getElementById("main");
    let random = Math.ceil(Math.random() * 6);
    main.style.backgroundImage = `url(./images/${random}.jpg)`

    this.bgButton.addEventListener("click", () => {
      random = Math.ceil(Math.random() * 6);
      main.style.backgroundImage = `url(./images/${random}.jpg)`
    });
  }
}
