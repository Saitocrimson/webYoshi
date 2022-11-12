const ITENS = document.getElementById("itens_lanc")

function lancamento(msg){
    const SPAN = document.getElementById('info');
    SPAN.setAttribute("transition",".5s");
    SPAN.innerText=msg;
}

function lUS(){
    lancamento("05/10/1995");
    ITENS.style.cssText = "background-image: url('../img/bandeira-estados-unidos.webp');background-size: cover;opacity:0.4";
}

function lBR(){
    lancamento("novembro de 1995");
    ITENS.style.cssText = "background-image: url('../img/bra.jpg');background-size: cover;opacity:0.4";
}

function lEU(){
    lancamento("dezembro 1995");
    ITENS.style.cssText = "background-image: url('../img/depositphotos_23583349-stock-photo-europe-flag.webp');background-size: cover;opacity:0.4";
}
