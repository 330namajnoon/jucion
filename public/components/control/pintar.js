import createElement from "../../js/createElement.js";
import indexContext from "../../contexts/indexContext.js";
export default function Pintar(back,name,color,pColor) {
    this.name = name;
    this.color = color;
    this.pColor = pColor;
    this.icon = createElement(back,{tagName:"span",innerHtml:"format_paint",className:"material-symbols-rounded",id:"c_icon4",style:`color:${this.pColor};`});
}
Pintar.prototype.setColor = function(color) {
    this.icon.style.backgroundColor = color;
}
Pintar.prototype.action = function() {
    setTimeout(() => {
        if(this.color.includes(indexContext.get("getAvionBack")().color) || this.color == "cb") {
            console.log(this.pColor.split("")[1])
            indexContext.get("getAvionBack")().setColor(this.name.split("")[1]);
        }
        indexContext.get("functionRemove")(0);
        indexContext.get("playAction")(0);
    }, indexContext.get("getSpid")()*1000);
}