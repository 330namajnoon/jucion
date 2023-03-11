import createElement from "../../js/createElement.js";

export default function FunctionAct(back,name,color,indexContext) {
    this.indexContext = indexContext;
    this.name = name;
    this.color = color;
    this.icon = createElement(back,{tagName:"h3",innerHtml:name,id:"c_icon4"});
}
FunctionAct.prototype.setColor = function(color) {
    this.icon.style.backgroundColor = color;
}
FunctionAct.prototype.action = function() {
    setTimeout(() => {
        this.indexContext.get("functionRemove")(0);
        if(this.color.includes(this.indexContext.get("getAvionBack")().color) || this.color == "cb") {
            this.indexContext.get("getFunctions")().forEach(fs => {
                if(fs.name.innerHTML == this.name) this.indexContext.get("addFunctions")(fs);
            });
        }
    }, this.indexContext.get("getSpid")()*1000);
}