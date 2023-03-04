import createElement from "../js/createElement.js"

export default function Home(back,index) {
    this.color = "";
    this.back = createElement(back,{tagName:"div",className:"home"});
}
Home.prototype.setColor = function(color) {
    this.color = color;
   
}