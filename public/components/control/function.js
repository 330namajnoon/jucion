import createElement from "../../js/createElement.js";
import FunctionFH from "./functionFH.js";
import indexContext from "../../contexts/indexContext.js";
export default function Function(back,data) {
    this.back = createElement(back,{tagName:"div",className:"function_back"});
    this.name = createElement(this.back,{tagName:"h5",className:"function_name",innerHtml:data.name});
    this.functions = data.f.map(f => new FunctionFH(this.back,f));
}