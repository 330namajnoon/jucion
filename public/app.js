import Index from "./js/index.js";
import levels from "./js/levels.js";
import createElement from "./js/createElement.js";
function App() {
    this.levelNo = localStorage.getItem("level") || 1;
    this.index = new Index(this.levelNo,this.ganar.bind(this),this.fallar.bind(this));
    this.index.game.setGrid();
    this.index.control.setBackSize();
}
App.prototype.ganar = function() {
    setTimeout(() => {
        alert("Has ganado!!");
        document.body.innerHTML = "";
        this.index = new Index(this.levelNo,this.ganar.bind(this),this.fallar.bind(this));
        this.index.game.setGrid();
        this.index.control.setBackSize();
    }, 100);
   
    
}
App.prototype.fallar = function() {
    setTimeout(() => {
        alert("Has fallado!!");
        this.index.game.setStars();
        this.index.control.play.stop.click();
        this.index.game.avion.restart(this.levelNo-1);
    }, 100);
    
}


const app = new App();

