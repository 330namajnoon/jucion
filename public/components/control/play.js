import createElement from "../../js/createElement.js";
import PlayFunction from "./playFunctions.js";
import Spid from "./spid.js";
import indexContext from "../../contexts/indexContext.js";
export default function Play(back) {
    this.spid = 1;
    this.back = createElement(back,{tagName:"div",className:"play_back"});
    this.terminal = createElement(this.back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"terminal",id:"terminal"});
    this.play = new PlayFunction(this.back);
    this.playButton = createElement(this.back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"play_arrow",id:"play_span"});
    this.stop = createElement(this.back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"stop",id:"stop",style:"display:none;"});
    this.spidDisplay = new Spid(this.back,this.setSpid.bind(this));
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
        this.playButton.click();
        setTimeout(()=> {this.play.play = true},this.spid * 1000);
        this.play.functions = [];
        this.play.back.innerHTML = "";
        indexContext.get("avionRestart")(localStorage.getItem("level")-1 || 0);
        this.stop.style.display = "none";
    })

   

    indexContext.set("getSpid",this.getSpid.bind(this));
    
}
Play.prototype.setSpid = function(spid) {
    if(this.spid > 0.065) {
        this.spid = this.spid/2;
    }else {
        this.spid = 1;
    }
    spid(this.spid);
}
Play.prototype.getSpid = function() {
   return this.spid;
}
