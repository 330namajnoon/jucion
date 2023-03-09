import createElement from "../../js/createElement.js";

export default function FunctionAct(back,name,getFS,p,avionPermiso,addFunction = null) {
    this.getFunction = getFS;
    this.addFunction = addFunction;
    this.avionPermiso = avionPermiso;
    this.name = name;
    this.color = "cb";
    this.back = createElement(back,{tagName:"div",className:"c_back"});
    this.icon = createElement(this.back,{tagName:"h6",innerHtml:name,id:"c_icon"});

    this.back.addEventListener("click",()=> {
        if(p){
            console.log(getFS())
            getFS().control = new FunctionAct(getFS().back,this.name,getFS,false);
        }
    })

    if(!p) {
        this.back.className = "c_back2";
        this.icon.id = "c_icon2";
    }
}
FunctionAct.prototype.setColor = function(c) {
    this.color = c;
    switch (c) {
        case "cv":
            this.back.style.cssText = "background-color: rgb(53, 207, 15)";
            break;
        case "ca":
            this.back.style.cssText = "background-color: rgb(15, 69, 207)";
            break;
        case "cr":
            this.back.style.cssText = "background-color: rgb(207, 15, 15)";
            break;
    }
}
FunctionAct.prototype.action = function() {
    
    this.getFunction().forEach(f => {
        if(f.name.innerHTML == this.name) {
            this.addFunction(f,this.getFunction);
        }
    });
    this.avionPermiso(this.color,this.name);
}