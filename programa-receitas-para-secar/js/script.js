(() => {
    "use strict"
    const body = document.querySelector("body");
    const logo = document.querySelector(".logo-tipo")
    const lista = document.querySelector(".munu-nav")
    body.className = "js"
    const click = logo.addEventListener("click", (e) =>{
        e.stopPropagation()
        if(body){
            lista.style.display = "block"
            setTimeout(() => {
                lista.style.display = "none"
            }, 10000);
        }
    })
    // const intervalo = setTimeout(()=>{
    //     // alert("ola seja bem vindo");
    //     click.style.display = "none"
    //     clearTimeout(click)
    // }, 10000);
    // setInterval(() => {
    //     // console.log("interval")
    // }, 2000);
})();