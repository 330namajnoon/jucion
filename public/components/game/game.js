import createElement from "../../js/createElement.js";
import index from "../../js/index.js";
import Avion from "./avion.js";
import Home from "./home.js";
import Homes from "./homes.js";
const body = document.querySelector("body");
export default function  Game(index,indexContext) {
    this.indexContext = indexContext;
    this.index = index;
    this.stars = index.level.stars.length;
    this.avion = new Avion(index.level.flight,indexContext);
    this.back = createElement(document.body,{tagName:"div",className:"game_back"});
    this.grid = [];
    indexContext.set("getGrid",this.getGrid.bind(this));
    indexContext.set("checkStars",this.checkStars.bind(this));
}
Game.prototype.setGrid = function() {
   this.index.level.grid.forEach(y_ => {
        let homes = new Homes(this.back); 
        y_.forEach(x_ => {
            let x = new Home(homes.back,this);
            x.setColor(x_);
            homes.homes.push(x);
        })
        this.grid.push(homes);
    })
    this.avion.set(this.grid);
    this.index.level.stars.forEach(s => {
        let back = this.grid[s.y].back.children[s.x];
        createElement(back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"star",id:"star"});
    })
}
Game.prototype.getGrid = function() {
    return this.grid;
}
Game.prototype.checkStars = function() {
    if(this.stars > 1) {
        this.stars--;
    }else {
        this.indexContext.get("ganar")();
    }    
}
