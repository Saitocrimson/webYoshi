const ITENS = document.getElementById("itens_lanc");

function lancamento(msg){
    const SPAN = document.getElementById('info');
    SPAN.setAttribute("transition",".5s");
    SPAN.innerText=msg;
}

function lUS(){
    lancamento("05/10/1995");
    ITENS.style.cssText = "background-image: url('../img/USA.webp');background-size: 50%;opacity:0.4";
}

function lBR(){
    lancamento("novembro de 1995");
    ITENS.style.cssText = "background-image: url('../img/BRA.jpg');background-size: 50%;opacity:0.4";
}

function lEU(){
    lancamento("dezembro 1995");
    ITENS.style.cssText = "background-image: url('../img/EUR.webp');background-size: 50%;opacity:0.4";
}
