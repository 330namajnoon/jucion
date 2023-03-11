import createElement from "../../js/createElement.js";

export default function Recto(back,name,color,indexContext) {
    this.indexContext = indexContext;
    this.name = name;
    this.color = color;
    this.icon = createElement(back,{tagName:"span",innerHtml:"vertical_align_top",className:"material-symbols-rounded",id:"c_icon4"});
}
Recto.prototype.setColor = function(color) {
    this.icon.style.backgroundColor = color;
}
Recto.prototype.action = function() {
    setTimeout(() => {
        if(this.color.includes(this.indexContext.get("getAvionBack")().color) || this.color == "cb") {
            this.indexContext.get("avionMuve")(this.name);
        }
        this.indexContext.get("functionRemove")(0);
        this.indexContext.get("playAction")(0);
    }, this.indexContext.get("getSpid")()*1000);
}