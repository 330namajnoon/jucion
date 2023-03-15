import createElement from "./createElement.js";
export default function confirm(mensaje,buttons = [{name:"si",value:true},{name:"no",value:false}]) {
    return new Promise((resolve)=> {    
        const confirmBack = createElement(document.body,{tagName:"div",className:"confirm_back"});
        const msg = createElement(confirmBack,{tagName:"h1",className:"confirm_msg",innerHtml:mensaje});
        const buttonsBack = createElement(confirmBack,{tagName:"div",className:"confirm_buttons"});
        buttons.forEach(b => {
            const button = createElement(buttonsBack,{tagName:"input",atrubuts:[{name:"type",value:"button"},{name:"value",value:b.name}],className:"confirm_button"});
            button.addEventListener("click",()=> {
                confirmBack.remove();
                resolve(b.value);
            })
        })
    })
}