import Game from "../components/game/game.js";
import Control from "../components/control/control.js";
import levels from "./levels.js";
export default function Index(levelNo,ganar,fallar) {
    this.context = {};
    this.levelNo = levelNo;
    this.level = levels[this.levelNo-1];
    this.game = new Game(this.level,{get:this.getContext.bind(this),set:this.setContext.bind(this)});
    this.control = new Control(this.level,{get:this.getContext.bind(this),set:this.setContext.bind(this)});
    this.setContext("getLevel",this.getLevel.bind(this));
    this.setContext("ganar",ganar.bind(this));
    this.setContext("fallar",fallar.bind(this));
}
Index.prototype.getContext = function(name) {
    return this.context[name];
}    
Index.prototype.setContext = function(name,value) {
    this.context[name] = value;
}

Index.prototype.getLevel = function() {
    return this.level;
}







