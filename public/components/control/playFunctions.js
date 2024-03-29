import createElement from "../../js/createElement.js";
import Recto from "./recto.js";
import Ezquierda from "./ezquierda.js";
import Derecha from "./derecha.js";
import FunctionAct from "./functionAact.js";
import Pintar from "./pintar.js";
import indexContext from "../../contexts/indexContext.js";
export default function PlayFunction(back) {
    this.play = true;
    this.back = createElement(back,{tagName:"div",className:"play"});
    this.functions = [];
    indexContext.set("functionRemove",this.remove.bind(this));
    indexContext.set("addFunctions",this.addFunctions.bind(this));
    indexContext.set("playAction",this.playAction.bind(this));
    indexContext.set("getPlayB",this.getPlay.bind(this));
}
PlayFunction.prototype.remove = function(index) {
    if(this.functions.length > 0) {
        this.functions[index].icon.remove();
        this.functions.splice(index,1);
    }
}
PlayFunction.prototype.addFunctions = function(functions) {
    this.back.innerHTML = "";
    let functionss = [];
    functions.functions.forEach(f => {
        if(f.control)functionss.push(f);
    })
    let newfunctions = functionss.map(f => {
        if(f.control) {
            let control;
            switch (f.control.name) {
                case "lr":
                    control = new Recto(this.back,f.control.name,f.control.color);
                    control.setColor(f.control.back.style.backgroundColor);
                    break;
                    case "le":
                    control = new Ezquierda(this.back,f.control.name,f.control.color);
                    control.setColor(f.control.back.style.backgroundColor);
                    break;
                    case "ld":
                    control = new Derecha(this.back,f.control.name,f.control.color);
                    control.setColor(f.control.back.style.backgroundColor);
                    break;
                    case "F1":
                        control = new FunctionAct(this.back,f.control.name,f.control.color);
                        control.setColor(f.control.back.style.backgroundColor);
                    break;
                    case "F2":
                        control = new FunctionAct(this.back,f.control.name,f.control.color);
                        control.setColor(f.control.back.style.backgroundColor);
                    break;
                    case "F3":
                        control = new FunctionAct(this.back,f.control.name,f.control.color);
                        control.setColor(f.control.back.style.backgroundColor);
                    break;
                    case "pr":
                        control = new Pintar(this.back,f.control.name,f.control.color,f.control.back.style.color);
                        control.setColor(f.control.back.style.backgroundColor);
                    break;
                    case "pv":
                        control = new Pintar(this.back,f.control.name,f.control.color,f.control.back.style.color);
                        control.setColor(f.control.back.style.backgroundColor);
                    break;
                    case "pa":
                        control = new Pintar(this.back,f.control.name,f.control.color,f.control.back.style.color);
                        control.setColor(f.control.back.style.backgroundColor);
                    break;

            }
                       
            return control;
        }
    })
    this.functions.forEach(f => {
        this.back.appendChild(f.icon);
        newfunctions.push(f);
    })
    this.functions = newfunctions;
    
    this.playAction(0);
}
PlayFunction.prototype.getPlay = function() {
    return this.play;
}
PlayFunction.prototype.playAction = function(index) {
    if(this.functions.length > 0 && this.play)this.functions[index].action();
}
