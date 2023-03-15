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
App.prototype.ganar = async function() {
    setTimeout(async () => {
        this.index.control.play.playButton.click();
        const res = await confirm("Has Ganado!",[{name:"Sigiente nivel",value:true},{name:"Volver",value:false}]);
        console.log(res)
        if(res) {
            document.body.innerHTML = "";
            if(this.levelNo < levels.length) {
                this.levelNo++;
            }else {
                this.levelNo = 1;
            }
            localStorage.setItem("level",this.levelNo);
            this.index = new Index(this.levelNo);
            this.index.game.setGrid();
            this.index.control.setBackSize();
        }else {
            document.body.innerHTML = "";
            localStorage.setItem("level",this.levelNo); 
            this.index = new Index(this.levelNo);
            this.index.game.setGrid();
            this.index.control.setBackSize();
        }
       
    }, 10);
   
    
}
App.prototype.fallar =  function() {
    setTimeout(async () => {
        this.index.control.play.playButton.click();
        const res = await confirm("has perdido!",[{name:"Volver",value:true}]);
        this.index.control.play.stop.click(); 
    }, 10);
    
}


const app = new App();

