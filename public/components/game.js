import createElement from "../js/createElement.js";
const body = document.querySelector("body");
export default function  Game(index) {
   
    this.back = createElement(document.body,{tagName:"div",className:"game_back"});
    console.log(index)
}
