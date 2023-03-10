import Game from "../components/game/game.js";
import Control from "../components/control/control.js";
import levels from "./levels.js";
function Index() {
    this.context = {};
    this.level = levels[0];
    this.game = new Game(this,{get:this.getContext.bind(this),set:this.setContext.bind(this)});
    this.control = new Control(this.level,{get:this.getContext.bind(this),set:this.setContext.bind(this)});
    this.setContext("getLevel",this.getLevel.bind(this));
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

const index = new Index();


export default index;





