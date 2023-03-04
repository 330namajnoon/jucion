import createElement from "../js/createElement.js";
import index from "../js/index.js";
import Home from "./home.js";
const body = document.querySelector("body");
export default function  Game(index) {
    this.index = index;
    this.back = createElement(document.body,{tagName:"div",className:"game_back"});
    this.grid = [];
}
Game.prototype.setGrid = function() {
    console.log(this.index)
   this.index.level.grid.forEach(y_ => {
        let y = [];
        y_.forEach(x_ => {
            let x = new Home(this.back,this);
            x.setColor(x_);
            y.push(x);

        })
        this.grid.push(y);
    })
}
