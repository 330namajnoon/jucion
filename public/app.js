import Index from "./js/index.js";
import levels from "./js/levels.js";
import createElement from "./js/createElement.js";
import indexContext from "./contexts/indexContext.js";
import confirm from "./js/confirm.js";



function App() {
    this.levelNo =  localStorage.getItem("level") || 1;
    this.index = new Index(this.levelNo);
    this.index.game.setGrid();
    this.index.control.setBackSize();
    indexContext.set("ganar",this.ganar.bind(this));
    indexContext.set("fallar",this.fallar.bind(this));

   
}
App.prototype.ganar = function() {
    setTimeout(async () => {
        this.index.control.play.playButton.click();
        const res = await confirm("Has Ganado!",[{name:"Sigiente nivel",value:true},{name:"Volver",value:false}]);
        if(res) {
            
            document.body.innerHTML = "";
            if(this.levelNo < levels.length) {
                this.levelNo++;
            }else {
                this.levelNo = 1;
            }
            indexContext.context = {};
            localStorage.setItem("level",this.levelNo);
            delete this.index;

            this.index = new Index(this.levelNo);
            this.index.game.setGrid();
            this.index.control.setBackSize();
            indexContext.set("ganar",this.ganar.bind(this));
            indexContext.set("fallar",this.fallar.bind(this));
        }else {
            
            document.body.innerHTML = ""; 
            this.index.control.play.stop.click(); 
            indexContext.context = {};
            delete this.index;
            this.index = new Index(this.levelNo);
            this.index.game.setGrid();
            this.index.control.setBackSize();
            indexContext.set("ganar",this.ganar.bind(this));
            indexContext.set("fallar",this.fallar.bind(this));
    
        }
       
    }, 10);
   
    
}
App.prototype.fallar =  function() {
    setTimeout(async () => {
        const res = await confirm("has perdido!",[{name:"Volver",value:true}]);
        this.index.control.play.stop.click(); 
    }, 10);
    
}


const app = new App();

