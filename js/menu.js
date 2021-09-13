(()=>{
"use strict"
const header = document.querySelector("header")
function lodotipo(links){
    const divlodo = document.createElement("div");
    divlodo.className = "logotipo"
    const link = document.createElement("a");
    link.className = "logo-tipo"
    link.setAttribute("href", links)
    link.textContent = "tudo online"
    divlodo.appendChild(link)
    return divlodo
}
header.appendChild(lodotipo("../index.html"))

})()