import Game from "../components/game.js";
import Control from "../components/control.js";
import levels from "./levels.js";
function Index() {
    this.levels = levels;
    this.level = localStorage.getItem("level") || 1;
    this.game = new Game(this);
    this.control = new Control(this);
   
}

const index = new Index();

export default index;





