import Game from "../components/game/game.js";
import Control from "../components/control/control.js";
import levels from "./levels.js";
function Index() {
    this.context = {};
    this.level = levels[0];
    this.game = new Game(this);
    this.control = new Control(this,this.game.avion.permiso.bind(this.game.avion),{get:this.getContext,set:this.setContext});

}
Index.prototype.getContext = function(name) {
    return this.context[name];
}    
Index.prototype.setContext = function(name,value) {
    this.context[name] = value;
}

const index = new Index();


export default index;





