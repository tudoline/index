(()=>{
"use strict"
    const body = document.querySelector("body")
    const menuNavegacao = document.querySelector(".menu-navegcaao");
    let menu = document.getElementById("checkbox-menu")
    menuNavegacao.classList.add("min-widthset")
    console.log(menu.checked)
    body.classList.add("js");
    menu.addEventListener("click", ()=>{
        // menu.checked = false;
        if(menu.checked === true){
            menuNavegacao.classList.remove("min-widthset")
        }else{
            menuNavegacao.classList.add("min-widthset")
        }
    })
    console.log(body)
})()