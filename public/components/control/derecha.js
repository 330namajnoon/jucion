import createElement from "../../js/createElement.js";

export default function Derecha(back,name,color,indexContext) {
    this.indexContext = indexContext;
    this.name = name;
    this.color = color;
    this.icon = createElement(back,{tagName:"span",innerHtml:"turn_right",className:"material-symbols-rounded",id:"c_icon4"});
}
Derecha.prototype.setColor = function(color) {
    this.icon.style.backgroundColor = color;
}
Derecha.prototype.action = function() {
    setTimeout(() => {
        if(this.color.includes(this.indexContext.get("getAvionBack")().color) || this.color == "cb") {
            this.indexContext.get("avionMuve")(this.name);
        }
        this.indexContext.get("functionRemove")(0);
        this.indexContext.get("playAction")(0);
    }, this.indexContext.get("getSpid")()*1000);
}