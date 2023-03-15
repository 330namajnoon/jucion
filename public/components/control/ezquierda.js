import createElement from "../../js/createElement.js";
import indexContext from "../../contexts/indexContext.js";
export default function Ezquierda(back,name,color) {
    this.name = name;
    this.color = color;
    this.icon = createElement(back,{tagName:"span",innerHtml:"turn_left",className:"material-symbols-rounded",id:"c_icon4"});
}
Ezquierda.prototype.setColor = function(color) {
    this.icon.style.backgroundColor = color;
}
Ezquierda.prototype.action = function() {
    setTimeout(() => {
        if(this.color.includes(indexContext.get("getAvionBack")().color) || this.color == "cb") {
            indexContext.get("avionMuve")(this.name);
        }
        indexContext.get("functionRemove")(0);
        indexContext.get("playAction")(0);
    },  indexContext.get("getSpid")()*1000);
}