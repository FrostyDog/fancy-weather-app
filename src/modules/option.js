export default class Option {
  constructor(parent, value){
    this.option = document.createElement("option")
    this.option.setAttribute("value", value)
    this.option.textContent = value;
    parent.appendChild((this.option));
  }
}
