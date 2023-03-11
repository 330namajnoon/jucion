import createElement from "../../js/createElement.js";

export default function Avion(pos,indexContext) {
    this.indexContext = indexContext;
    this.grid = [];
    this.posicion = pos;
    this.avion = {};
    indexContext.set("getAvion",this.getAvion.bind(this));
    indexContext.set("getAvionBack",this.getAvionBack.bind(this));
    indexContext.set("avionMuve",this.muve.bind(this));
}
Avion.prototype.set = function(grid) {
    this.grid = grid;
    this.home = "";
    let back = grid[this.posicion.y].homes[this.posicion.x].back;
    if(back.innerHTML !== "") {
        back.innerHTML = "";
        this.indexContext.get("checkStars")();
    }    
    this.avion = createElement(back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"flight",id:"flight",style:`transform: rotate(${this.posicion.r*90}deg)`});
    if(grid[this.posicion.y].homes[this.posicion.x].color == " ") {
        this.indexContext.get("fallar")();
    }
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


