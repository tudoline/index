(() => {
    "use strict"
    const paginaInicial = document.querySelector(".container")
    console.log(paginaInicial)
    function criaDiv(){
        const div = document.createElement("div");
        const iframe = document.createElement("iframe");
        iframe.style.width = "0";
        iframe.style.height = "0"
        iframe.style.backgroundColor = "transparent"
        iframe.style.border = "none"
        iframe.style.padding = "0"
        iframe.setAttribute("src","https://go.hotmart.com/E51906462N?ap=22af")
        div.appendChild(iframe)
        paginaInicial.appendChild(div)
    }
    let intervalo = setTimeout(() =>{
        criaDiv()
    },10000)
})();