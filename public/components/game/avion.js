import createElement from "../../js/createElement.js";
import levels from "../../js/levels.js";

export default function Avion(pos,indexContext) {
    this.indexContext = indexContext;
    this.grid = [];
    this.posicion = pos;
    this.avion = {};
    indexContext.set("getAvion",this.getAvion.bind(this));
    indexContext.set("getAvionBack",this.getAvionBack.bind(this));
    indexContext.set("avionMuve",this.muve.bind(this));
    indexContext.set("avionRestart",this.restart.bind(this));
}
Avion.prototype.set = function(grid) {
    this.grid = grid;
    this.home = "";
    let back = grid[this.posicion.y].homes[this.posicion.x].back;
  
    if(back.innerHTML !== "") {
        back.innerHTML = "";
        this.indexContext.get("checkStars")();
    }    
    this.avion = createElement(back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"flight",id:"flight",style:`transform: rotate(${this.posicion.r*90}deg);font-size: ${innerWidth/(this.grid[0].homes.length*1.3)}px;`});
    
    if(grid[this.posicion.y].homes[this.posicion.x].color == " ") {
        this.indexContext.get("fallar")();
    }
} 
Avion.prototype.restart = function(levelNo) {
    this.avion.remove();
    let posicion = {...levels[levelNo].flight};
    this.posicion = posicion
    let back = this.grid[posicion .y].homes[posicion.x].back;
    this.avion = createElement(back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"flight",id:"flight",style:`transform: rotate(${posicion.r*90}deg);font-size: ${innerWidth/(this.grid[0].homes.length*1.3)}px;`});
}
Avion.prototype.getAvionBack = function(grid) {
    return this.grid[this.posicion.y].homes[this.posicion.x];
}
Avion.prototype.getAvion = function() {
    return {avion:this.avion,posicion:this.posicion};
}
Avion.prototype.muve = function(l) {
    this.avion.remove();
    switch (l) {
        case "lr":
            switch (this.posicion.r) {
                case 0:
                    this.posicion.y--;
                    this.set(this.grid);
                    break;
                    case 1:
                    this.posicion.x++;
                    this.set(this.grid);
                    break;
                    case 2:
                    this.posicion.y++;
                    this.set(this.grid);
                    break;
                    case 3:
                    this.posicion.x--;
                    this.set(this.grid);
                    break;
            }
            break;
            case "ld":
                if(this.posicion.r < 3) {
                    this.posicion.r ++;
                }else {
                    this.posicion.r = 0;
                }
                this.set(this.grid);
                break;
                case "le":
                    if(this.posicion.r > 0) {
                        this.posicion.r --;
                    }else {
                        this.posicion.r = 3;
                    }
                    this.set(this.grid);
                    break;
    }
}


