import createElement from "../../js/createElement.js";

export default function FunctionF(back,element,name) {
    this.color = "cb";
    this.name = name;
    this.back = element;
    this.back.id = "c_icon3";
    back.appendChild(this.back);
    console.log(this.back)
}
FunctionF.prototype.setColor = function(color,c) {
    this.color = c;
    this.back.style.backgroundColor = color;
}