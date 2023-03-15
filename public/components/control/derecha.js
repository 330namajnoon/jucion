import createElement from "../../js/createElement.js";
import indexContext from "../../contexts/indexContext.js";
export default function Derecha(back,name,color) {

    this.name = name;
    this.color = color;
    this.icon = createElement(back,{tagName:"span",innerHtml:"turn_right",className:"material-symbols-rounded",id:"c_icon4"});
}
Derecha.prototype.setColor = function(color) {
    this.icon.style.backgroundColor = color;
}
Derecha.prototype.action = function() {
    setTimeout(() => {
        if(this.color.includes(indexContext.get("getAvionBack")().color) || this.color == "cb") {
            indexContext.get("avionMuve")(this.name);
        }
        indexContext.get("functionRemove")(0);
        indexContext.get("playAction")(0);
    },  indexContext.get("getSpid")()*1000);
}