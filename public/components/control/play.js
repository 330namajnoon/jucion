import createElement from "../../js/createElement.js";
import Recto from "./recto.js";
import Ezquierda from "./ezquierda.js";
import Derecha from "./derecha.js";
import FunctionAct from "./functionAct.js";
export default function Play(back,getFunctions,avionPermiso) {
    this.avionPermiso = avionPermiso;
    this.permiso = false;4
    this.s = 1000;
    this.functions = [];
    this.back = createElement(back,{tagName:"div",className:"play_back"});
    this.play = createElement(this.back,{tagName:"div",className:"play"});
    this.playButton = createElement(this.back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"play_arrow",id:"play_span"});
    this.playButton.addEventListener("click",(e)=> {
        if(this.playButton.innerHTML == "play_arrow") {
            this.playButton.innerHTML = "pause";
            this.addFunctions(getFunctions()[0],getFunctions);
        }else{ 
            this.playButton.innerHTML = "play_arrow"; 
            this.permiso = false;
        }    
    })
}
Play.prototype.addFunctions = function(newF,getFunctions) {
    this.play.innerHTML = "";
    let newfunctions = newF.functions.map(f => {
        if(f.control) {
            let newf;
            switch (f.control.name) {
                
                case "lr":
                    newF = new Recto(this.play,f.control.name,getFunctions,false,this.avionPermiso);
                    break;
                case "le":
                    newF = new Ezquierda(this.play,f.control.name,getFunctions,false,this.avionPermiso);
                    break;
                case "F1" || "F2" || "F3" || "F4":
                    newF = new FunctionAct(this.play,f.control.name,getFunctions,false,this.avionPermiso,this.addFunctions.bind(this));
                    break;
            }
            return newF;
        }
    })
    this.functions.forEach(f => {
        newfunctions.push(f);
    })
    newfunctions.forEach(f => {
        if(f) this.functions.push(f);
    })
    this.playAction(this.functions);
}
Play.prototype.playAction = function(functions) {
   functions.forEach((f,index) => {

        setTimeout(() => {
            f.action();
            f.back.remove();
            this.functions.splice(0,1);
            
        },(index+1)*this.s);
   })
}
