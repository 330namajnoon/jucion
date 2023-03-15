import createElement from "./createElement.js";
function confirm() {
    return new Promise((resolve)=> {
        const next = createElement(document.body,{tagName:"input",atrubuts:[{name:"type",value:"button"},{name:"value",value:"Next"}],className:"next"});
        next.addEventListener("click",()=> {
            resolve(true);
        })
    })
}

export default function descripcion() {
    const descripciones = createElement(document.body,{tagName:"div"});
    
}