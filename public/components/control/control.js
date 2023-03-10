import createElement from "../../js/createElement.js";
import Play from "./play.js";
import Function from "./function.js";
import Controls from "./controls.js";
export default function Control(level,indexContext) {
    this.indexContext = indexContext;
    this.functionSelectada = false;
    this.back = createElement(document.body,{tagName:"div",className:"control_back"});
    this.play = new Play(this.back,indexContext);
    this.functions = level.functions.map(f => new Function(this.back,f,indexContext));
    this.controls = new Controls(this.back,level.controls,indexContext);
  
    indexContext.set("setFS",this.setFS.bind(this));
    indexContext.set("getFS",this.getFS.bind(this));
    indexContext.set("getFunctions",this.getFunctions.bind(this));

   
}
Control.prototype.setBackSize = function() {
    let playP = this.play.back.getBoundingClientRect();
    this.back.style.minHeight = `${innerHeight-(playP.y - (playP.height))}px`;
    console.log(this.play.back)
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
