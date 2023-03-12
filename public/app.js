import Index from "./js/index.js";
import levels from "./js/levels.js";
import createElement from "./js/createElement.js";
function App() {
    this.a = createElement(document.body,{tagName:"a",atrubuts:[{name:"href",value:"/"}]});
    this.levelNo = localStorage.getItem("level") || 1;
    this.index = new Index(this.levelNo,this.ganar.bind(this),this.fallar.bind(this));
    this.index.game.setGrid();
    this.index.control.setBackSize();
}
App.prototype.ganar = function() {
    setTimeout(() => {
        alert("Has ganado!!");
        document.body.innerHTML = "";
        if(this.levelNo < levels.length) {
            this.levelNo++;
        }else {
            this.levelNo = 1;
        }
        localStorage.setItem("level",this.levelNo);
        this.a.click();
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

