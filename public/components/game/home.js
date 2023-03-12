import createElement from "../../js/createElement.js"

export default function Home(back,level) {
    this.level = level;
    this.color = "";
    let yLength = this.level.grid[0].length;
    this.back = createElement(back,{tagName:"div",className:"home",style:`width:${((innerWidth-(yLength*((innerWidth/100)*1.5)))/yLength)}px;height:${((innerWidth-(yLength*((innerWidth/100)*1.5)))/yLength)}px;`});
}
Home.prototype.setColor = function(color) {
    this.color = color;
    switch (this.color) {
        case "v":
            this.back.style.cssText += "background-color: rgb(12, 138, 33)";
            break;
        case "r":
            this.back.style.cssText += "background-color: rgb(199, 43, 43)";
            break;
        case "a":
            this.back.style.cssText += "background-color: rgb(29, 78, 212)";
            break;
        case " ":
            this.back.style.cssText += "background-color: rgb(255, 255, 255)";
            break;
        
        default:
            break;
    }
   
}