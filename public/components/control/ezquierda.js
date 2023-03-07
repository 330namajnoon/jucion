import createElement from "../../js/createElement.js";

export default function Ezquierda(back,name,getFS,p,avionPermiso) {
    this.name = name;
    this.color = "cb";
    this.back = createElement(back,{tagName:"div",className:"c_back"});
    this.icon = createElement(this.back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"turn_left",id:"c_icon"});

    this.back.addEventListener("click",()=> {
        if(p){
            console.log(getFS())
            getFS().control = new Ezquierda(getFS().back,this.name,getFS,false);
        }
    })

    if(!p) {
        this.back.className = "c_back2";
        this.icon.id = "c_icon2";
    }
}
Ezquierda.prototype.setColor = function(c) {
    this.color = c;
    switch (c) {
        case "cv":
            this.back.style.cssText = "background-color: rgb(53, 207, 15)";
            break;
        case "ca":
            this.back.style.cssText = "background-color: rgb(15, 69, 207)";
            break;
        case "cr":
            this.back.style.cssText = "background-color: rgb(207, 15, 15)";
            break;
    }
}