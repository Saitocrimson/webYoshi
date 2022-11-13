const ITENS = document.getElementById("itens_lanc");

function lancamento(msg){
    const SPAN = document.getElementById('info');
    SPAN.setAttribute("transition",".5s");
    SPAN.innerText=msg;
}

function lUS(){
    lancamento("05/10/1995");
    ITENS.style.cssText = "border-bottom: 3px solid red";
}

function lBR(){
    lancamento("novembro de 1995");
    ITENS.style.cssText = "border-bottom: 3px solid green";
}

function lEU(){
    lancamento("dezembro 1995");
    ITENS.style.cssText = "border-bottom: 3px solid blue";
}
