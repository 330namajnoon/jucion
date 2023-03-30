import createElement from "../../js/createElement.js";
import indexContext from "../../contexts/indexContext.js";
export default function Recto(back,name,color) {
    this.name = name;
    this.color = color;
    this.icon = createElement(back,{tagName:"span",innerHtml:"vertical_align_top",className:"material-symbols-rounded",id:"c_icon4"});
}
Recto.prototype.setColor = function(color) {
    this.icon.style.backgroundColor = color;
}
Recto.prototype.action = function() {
    setTimeout(() => {
        if(this.color.includes(indexContext.get("getAvionBack")().color) || this.color == "cb" && indexContext.get("getPlayB")()) {
            indexContext.get("avionMuve")(this.name);
        }
        indexContext.get("functionRemove")(0);
        indexContext.get("playAction")(0);
    }, indexContext.get("getSpid")()*1000);
}