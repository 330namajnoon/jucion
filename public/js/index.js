import Game from "../components/game/game.js";
import Control from "../components/control/control.js";
import levels from "./levels.js";
function Index() {
    this.context = {};
    this.levelNo = 1;
    this.level = levels[this.levelNo-1];
    this.game = new Game(this,{get:this.getContext.bind(this),set:this.setContext.bind(this)});
    this.control = new Control(this.level,{get:this.getContext.bind(this),set:this.setContext.bind(this)});
    this.setContext("getLevel",this.getLevel.bind(this));
    this.setContext("ganar",this.ganar.bind(this));
    this.setContext("fallar",this.fallar.bind(this));
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
Index.prototype.ganar = function() {
    alert("Has ganado!!");
    document.body.innerHTML = "";
    if(this.levelNo < levels.length) {
        this.levelNo++;
    }else {
        this.levelNo = 1;
    }
    this.levelNo = 1;
    this.level = levels[this.levelNo-1];
    this.game = new Game(this,{get:this.getContext.bind(this),set:this.setContext.bind(this)});
    this.control = new Control(this.level,{get:this.getContext.bind(this),set:this.setContext.bind(this)});
}
Index.prototype.fallar = function() {
    alert("Has fallado!!");
    document.body.innerHTML = "";
    this.level = levels[this.levelNo-1];
    this.game = new Game(this,{get:this.getContext.bind(this),set:this.setContext.bind(this)});
    this.control = new Control(this.level,{get:this.getContext.bind(this),set:this.setContext.bind(this)});
}

const index = new Index();


export default index;





