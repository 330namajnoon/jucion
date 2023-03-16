import createElement from "./createElement.js";
function confirm() {
    return new Promise((resolve)=> {
        const next = createElement(document.body,{tagName:"input",atrubuts:[{name:"type",value:"button"},{name:"value",value:"Next"}],className:"next"});
        next.addEventListener("click",()=> {
            next.remove();
            resolve(true);
        })
    })
}

export default async function descripcion() {
    const game = createElement(document.body,{tagName:"div",className:"game"});
    let confirm1 = await confirm();
    game.remove();
    const control = createElement(document.body,{tagName:"div",className:"control"});
    let confirm2 = await confirm();
    control.remove();

    
}