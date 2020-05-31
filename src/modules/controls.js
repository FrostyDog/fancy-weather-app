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
    this.langButton.appendChild(document.createElement("option"));
    this.langButton.appendChild(document.createElement("option"));
    this.tempButton.appendChild(document.createElement("option"));
    this.tempButton.appendChild(document.createElement("option"));
    parent.appendChild(this.bgButton);
    parent.appendChild(this.langButton);
    parent.appendChild(this.tempButton);
  }

  changeBg() {
    const main = document.getElementById("main");
    let random = Math.ceil(Math.random() * 6);
    main.style.backgroundImage = `url(./images/${random}.jpg)`

    document.getElementById("main").addEventListener("click", () => {
      random = Math.ceil(Math.random() * 6);
      main.style.backgroundImage = `url(./images/${random}.jpg)`
    });
  }
}
