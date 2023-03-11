import createElement from "../../js/createElement.js";
import PlayFunction from "./playFunctions.js";
export default function Play(back,indexContext) {
    this.spid = 1;
    this.back = createElement(back,{tagName:"div",className:"play_back"});
    this.play = new PlayFunction(this.back,indexContext);
    this.playButton = createElement(this.back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"play_arrow",id:"play_span"});
    this.stop = createElement(this.back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"stop",id:"stop",style:"display:none;"});
    this.spidDisplay = createElement(this.back,{tagName:"h6",className:"spid",innerHtml:this.spid})
    this.playButton.addEventListener("click",(e)=> {
        if(this.playButton.innerHTML == "play_arrow") {
            this.playButton.innerHTML = "pause";
            if(this.play.play) {
                this.play.addFunctions(indexContext.get("getFunctions")()[0]);
                this.stop.style.display = "block";
            }else {
                this.play.play = true;
                this.play.playAction(0);
            }    
        }else{ 
            this.playButton.innerHTML = "play_arrow"; 
            this.play.play = false;
        }    
    })
    this.stop.addEventListener("click",()=> {
        this.playButton.innerHTML = "play_arrow"; 
        this.play.play = true;
        this.play.functions = [];
        this.play.back.innerHTML = "";
        indexContext.get("avionRestart")(localStorage.getItem("level")-1 || 0);
        this.stop.style.display = "none";
    })

    this.spidDisplay.addEventListener("click",()=> {
        this.setSpid();
        this.spidDisplay.innerHTML = this.spid;
    })

    indexContext.set("getSpid",this.getSpid.bind(this));
    
}
Play.prototype.setSpid = function() {
    if(this.spid > 0.25) {
        this.spid = this.spid/2;
    }else {
        this.spid = 1;
    }
}
Play.prototype.getSpid = function() {
   return this.spid;
}
