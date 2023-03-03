import Game from "../components/game.js";
import Control from "../components/control.js";
function Index() {
    
    this.game = new Game(this);
    this.control = new Control(this);
   
}

const index = new Index();

export default index;





