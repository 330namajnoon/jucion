import createElement from "../../js/createElement.js";

export default function FunctionFH(back,data,indexContext) {
    this.back = createElement(back,{tagName:"div",className:"f_back"});
    this.control = false;
    this.back.addEventListener("click",()=> {
        indexContext.get("setFS")(this);
        console.log(indexContext.get("getFS")());
    })
}