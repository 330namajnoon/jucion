import createElement from "../../js/createElement.js";

export default function Play(back,getFunctions) {
    this.permiso = false;4
    this.s = 1000;
    this.functions = [];
    this.back = createElement(back,{tagName:"div",className:"play_back"});
    this.play = createElement(this.back,{tagName:"div",className:"play"});
    this.playButton = createElement(this.back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"play_arrow",id:"play_span"});
    this.playButton.addEventListener("click",(e)=> {
        if(this.playButton.innerHTML == "play_arrow") {
            this.playButton.innerHTML = "pause";
            this.addFunctions(getFunctions()[0]);
        }else{ 
            this.playButton.innerHTML = "play_arrow"; 
            this.permiso = false;
        }    
    })
}
Play.prototype.addFunctions = function(newF,getFunctions) {
    this.play.innerHTML = "";
    let newFunctions = newF.functions.map(f => f);
    this.functions.forEach(f => {
        newFunctions.push(f);
    })
    this.functions = newFunctions;
    this.functions.forEach(f => {
        this.play.appendChild(newf.back);
    })
    console.log(this.functions);
    this.playAction(this.functions);
}
Play.prototype.playAction = function(functions) {
   

}
