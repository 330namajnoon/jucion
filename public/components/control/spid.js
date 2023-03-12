import createElement from "../../js/createElement.js";

function Point(back,deg) {
    this.center = createElement(back,{tagName:"div",className:"spidCenter",style:`transform: rotate(${deg}deg)`});
    this.punto = createElement(this.center,{tagName:"div",className:"spidPoint"});
}

export default function Spid(back,setSpid) {
    this.back = createElement(back,{tagName:"div",className:"spid"});
    this.p1 = new Point(this.back,-45);
    this.p1 = new Point(this.back,-0);
    this.p1 = new Point(this.back,45);
    this.spidCenter = createElement(this.back,{tagName:"div",className:"spidCenter2",style:`transform: rotate(${-60}deg)`});
    this.spid = createElement(this.spidCenter,{tagName:"div",className:"Spid"});

    this.back.addEventListener("click",()=> {
        setSpid((spid)=> {
            switch (spid) {
                case 1:
                    this.spidCenter.style.cssText = `transform: rotate(${-60}deg)`
                    break;
                    case 0.5:
                        this.spidCenter.style.cssText = `transform: rotate(${0}deg)`
                        break;
                        case 0.25:
                            this.spidCenter.style.cssText = `transform: rotate(${60}deg)`
                            break;
            }
        })
    })
   
}