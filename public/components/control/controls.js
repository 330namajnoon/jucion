import createElement from "../../js/createElement.js";
import FunctionF from "./functionF.js";
export default function Controls(back,data,indexContext) {
    this.back = createElement(back,{tagName:"div",className:"controls_back"});
    this.controls = [];
    data.forEach(y => {
        y.forEach(c => {
            switch (c) {
                case "lr":
                    let control = createElement(this.back,{tagName:"span",innerHtml:"vertical_align_top",className:"material-symbols-rounded",id:"c_icon"});
                    control.addEventListener("click",()=> {
                        let fs = indexContext.get("getFS")();
                        fs.back.innerHTML = "";
                        fs.control = new FunctionF(fs.back,control.cloneNode(true),c);
                        
                    })
                    this.controls.push(control);
                    break;
                case "ld":
                    let control1 = createElement(this.back,{tagName:"span",innerHtml:"turn_right",className:"material-symbols-rounded",id:"c_icon"});
                    control1.addEventListener("click",()=> {
                        let fs = indexContext.get("getFS")();
                        fs.back.innerHTML = "";
                        fs.control = new FunctionF(fs.back,control1.cloneNode(true),c);
                    })
                    this.controls.push(control1);
                    break;
                case "le":
                    let control2 = createElement(this.back,{tagName:"span",innerHtml:"turn_left",className:"material-symbols-rounded",id:"c_icon"});
                    control2.addEventListener("click",()=> {
                        let fs = indexContext.get("getFS")();
                        fs.back.innerHTML = "";
                        fs.control = new FunctionF(fs.back,control2.cloneNode(true),c);
                    })
                    this.controls.push(control2);
                    break;
                case "pv":
                    let pv = createElement(this.back,{tagName:"span",innerHtml:"format_paint",className:"material-symbols-rounded",id:"c_icon"});
                    pv.style.color = "rgb(12, 138, 33)";
                    pv.addEventListener("click",()=> {
                        let fs = indexContext.get("getFS")();
                        fs.back.innerHTML = "";
                        fs.control = new FunctionF(fs.back,pv.cloneNode(true),c);
                    })
                    this.controls.push(pv);
                    break;
                    case "pr":
                        let pr = createElement(this.back,{tagName:"span",innerHtml:"format_paint",className:"material-symbols-rounded",id:"c_icon"});
                        pr.style.color = "rgb(235, 45, 45)";
                        pr.addEventListener("click",()=> {
                            let fs = indexContext.get("getFS")();
                            fs.back.innerHTML = "";
                            fs.control = new FunctionF(fs.back,pr.cloneNode(true),c);
                        })
                        this.controls.push(pr);
                        break;  
                        case "pa":
                            let pa = createElement(this.back,{tagName:"span",innerHtml:"format_paint",className:"material-symbols-rounded",id:"c_icon"});
                            pa.style.color = "rgb(29, 78, 212)";
                            pa.addEventListener("click",()=> {
                                let fs = indexContext.get("getFS")();
                                fs.back.innerHTML = "";
                                fs.control = new FunctionF(fs.back,pa.cloneNode(true),c);
                            })
                            this.controls.push(pa);
                            break;  
                            case "F1":
                                let fun = createElement(this.back,{tagName:"h3",innerHtml:c,id:"c_icon"});
                                fun.addEventListener("click",()=> {
                                    let fs = indexContext.get("getFS")();
                                    fs.back.innerHTML = "";
                                    fs.control = new FunctionF(fs.back,fun.cloneNode(true),c);
                                })
                                this.controls.push(fun);
                                break; 
                                case "F2":
                                    let fun2 = createElement(this.back,{tagName:"h3",innerHtml:c,id:"c_icon"});
                                    fun2.addEventListener("click",()=> {
                                        let fs = indexContext.get("getFS")();
                                        fs.back.innerHTML = "";
                                        fs.control = new FunctionF(fs.back,fun2.cloneNode(true),c);
                                    })
                                    this.controls.push(fun2);
                                    break;  
                                    case "F3":
                                    let fun3 = createElement(this.back,{tagName:"h3",innerHtml:c,id:"c_icon"});
                                    fun3.addEventListener("click",()=> {
                                        let fs = indexContext.get("getFS")();
                                        fs.back.innerHTML = "";
                                        fs.control = new FunctionF(fs.back,fun3.cloneNode(true),c);
                                    })
                                    this.controls.push(fun3);
                                    break;    
                                    case "__":
                                        let none = createElement(this.back,{tagName:"h3",id:"c_icon"});
                                        this.controls.push(none);
                                        break;    
                case "cr":
                    let cr = createElement(this.back,{tagName:"div",id:"c_icon"});
                    cr.style.cssText = "background-color: rgb(235, 45, 45);";
                    cr.addEventListener("click",()=> {
                        let fs = indexContext.get("getFS")();
                        if(fs.control) {
                            fs.control.setColor("rgb(235, 45, 45)",c)
                        }
                    })
                    this.controls.push(cr);
                    break;
                case "cv":
                    let cv = createElement(this.back,{tagName:"div",id:"c_icon"});
                    cv.style.cssText = "background-color: rgb(12, 138, 33);";
                    cv.addEventListener("click",()=> {
                        let fs = indexContext.get("getFS")();
                        if(fs.control) {
                            fs.control.setColor("rgb(12, 138, 33)",c)
                        }
                    })
                    this.controls.push(cv);
                    break;
                case "ca":
                    let ca = createElement(this.back,{tagName:"div",id:"c_icon"});
                    ca.style.cssText = "background-color: rgb(29, 78, 212);";
                    ca.addEventListener("click",()=> {
                        let fs = indexContext.get("getFS")();
                        if(fs.control) {
                            fs.control.setColor("rgb(29, 78, 212",c)
                        }
                    })
                    this.controls.push(ca);
                    break;
            }
           
           
        })
    })
   
}