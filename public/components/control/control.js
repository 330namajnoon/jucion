import createElement from "../../js/createElement.js";
import Function from "./function.js";
import Play from "./play.js";
import Recto from "./recto.js";
import Ezquierda from "./ezquierda.js";
export default function Control(index,avionPermiso) {
    this.functionSelectada = false;
    this.back = createElement(document.body,{tagName:"div",className:"control_back"});
    this.play = new Play(this.back,this.getFunctions.bind(this));
    this.functions = index.level.functions.map(f => new Function(this.back,f,this.setFS.bind(this)));
    this.controlsBack = createElement(this.back,{tagName:"div",className:"controls_back"});
    this.controls = index.level.controls.map(cy => {
        let controls = cy.map(sx => {
            let c;
            switch (sx) {
                case "lr":
                    c = new Recto(this.controlsBack,sx,this.getFS.bind(this),true,avionPermiso);
                    break;
                case "le":
                    c = new Ezquierda(this.controlsBack,sx,this.getFS.bind(this),true,avionPermiso);
                    break;
            
                default:
                    break;
            }
        });
        return controls
    })
}
Control.prototype.setFS = function(f) {
    this.functionSelectada = f;
}
Control.prototype.getFS = function() {
    return this.functionSelectada;
}
Control.prototype.getFunctions = function() {
    return this.functions;
}