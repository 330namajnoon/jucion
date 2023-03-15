import Game from "../components/game/game.js";
import Control from "../components/control/control.js";
import levels from "./levels.js";
import indexContext from "../contexts/indexContext.js";
export default function Index(levelNo) {
    this.context = {};
    this.levelNo = levelNo;
    this.level = levels[this.levelNo-1];
    this.game = new Game(this.level);
    this.control = new Control(this.level);
    indexContext.set("getLevel",this.getLevel.bind(this));
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







