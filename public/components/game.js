import createElement from "../js/createElement.js";
import index from "../js/index.js";
import Home from "./home.js";
import Homes from "./homes.js";
const body = document.querySelector("body");
export default function  Game(index) {
    this.index = index;
    this.back = createElement(document.body,{tagName:"div",className:"game_back"});
    this.grid = [];
}
Game.prototype.setGrid = function() {
   this.index.level.grid.forEach(y_ => {
        let homes = new Homes(this.back); 
        y_.forEach(x_ => {
            let x = new Home(homes.back,this);
            x.setColor(x_);
        })
        this.grid.push(homes);
    })
}
