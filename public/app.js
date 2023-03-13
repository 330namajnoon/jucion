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
        this.index.control.play.playButton.click();
        alert("Has ganado!!");
        document.body.innerHTML = "";
        if(this.levelNo < levels.length) {
            this.levelNo++;
        }else {
            this.levelNo = 1;
        }
        localStorage.setItem("level",this.levelNo);
        this.index = new Index(this.levelNo,this.ganar.bind(this),this.fallar.bind(this));
        this.index.game.setGrid();
        this.index.control.setBackSize();
    }, 10);
   
    
}
App.prototype.fallar = function() {
    setTimeout(() => {
        this.index.control.play.playButton.click();
        alert("Has fallado!!");
        this.index.game.setStars();
        this.index.control.play.stop.click();
        this.index.game.avion.restart(this.levelNo-1);
    }, 10);
    
}


const app = new App();

