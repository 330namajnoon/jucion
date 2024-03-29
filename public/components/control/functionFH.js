import createElement from "../../js/createElement.js";
import indexContext from "../../contexts/indexContext.js";
export default function FunctionFH(back,data) {
    this.select = false;
    this.back = createElement(back,{tagName:"div",className:"f_back"});
    this.control = false;
    this.back.addEventListener("click",()=> {
        indexContext.get("setFS")(this);
        if(!this.select) {
            indexContext.get("getFunctions")().forEach(fs => {
                fs.functions.forEach(fc => {
                    fc.back.style.boxShadow = "inset 0 0 2px 1px rgb(66, 66, 66)";
                    fc.select = false;
                })
            });
            this.back.style.boxShadow = "inset 0 0 5px 2px rgb(49, 226, 9)";
            this.select = true;
        }else {
            this.back.style.boxShadow = "inset 0 0 2px 1px rgb(66, 66, 66)";
            this.select = false;
        }
    })
}