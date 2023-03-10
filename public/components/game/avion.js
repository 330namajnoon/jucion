import createElement from "../../js/createElement.js";

export default function Avion(pos,indexContext) {
    this.grid = [];
    this.posicion = pos;
    this.avion = {};
    indexContext.set("getAvion",this.getAvion.bind(this));
    indexContext.set("getAvionBack",this.getAvionBack.bind(this));
}
Avion.prototype.set = function(grid) {
    this.grid = grid;
    this.home = "";
    let back = grid[this.posicion.y].homes[this.posicion.x].back;
    this.avion = createElement(back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"flight",id:"flight",style:`transform: rotate(${this.posicion.r*90}deg)`});
} 
Avion.prototype.getAvionBack = function(grid) {
    return grid[this.posicion.y].homes[this.posicion.x];
}
Avion.prototype.getAvion = function() {
    return {avion:this.avion,posicion:this.posicion};
}


