import createElement from "../../js/createElement.js";
import FunctionFH from "./functionFH.js";
export default function Function(back,data,indexContext) {
    this.back = createElement(back,{tagName:"div",className:"function_back"});
    this.name = createElement(this.back,{tagName:"h5",className:"function_name",innerHtml:data.name});
    this.functions = data.f.map(f => new FunctionFH(this.back,f,indexContext));
}