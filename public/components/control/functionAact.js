import createElement from "../../js/createElement.js";
import indexContext from "../../contexts/indexContext.js";
export default function FunctionAct(back,name,color) {
    this.name = name;
    this.color = color;
    this.icon = createElement(back,{tagName:"h3",innerHtml:name,id:"c_icon4"});
}
FunctionAct.prototype.setColor = function(color) {
    this.icon.style.backgroundColor = color;
}
FunctionAct.prototype.action = function() {
    setTimeout(() => {
        indexContext.get("functionRemove")(0);
        if(this.color.includes(indexContext.get("getAvionBack")().color) || this.color == "cb") {
            indexContext.get("getFunctions")().forEach(fs => {
                if(fs.name.innerHTML == this.name) indexContext.get("addFunctions")(fs);
            });
        }else {
            indexContext.get("playAction")(0);
        }
    }, indexContext.get("getSpid")()*1000);
}