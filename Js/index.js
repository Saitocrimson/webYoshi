const ITENS = document.getElementById("itens_lanc");

function lancamento(msg){
    const SPAN = document.getElementById('info');
    SPAN.style.cssText = ""
    SPAN.innerText=msg;
}

function lJA(){
    lancamento("Agosto de 1995");
    ITENS.style.cssText = "border-bottom: 3px solid white";
}

function lUS(){
    lancamento("Outubro de 1995");
    ITENS.style.cssText = "border-bottom: 3px solid red";
}

function lBR(){
    lancamento("Novembro de 1995");
    ITENS.style.cssText = "border-bottom: 3px solid green";
}

function lEU(){
    lancamento("Dezembro 1995");
    ITENS.style.cssText = "border-bottom: 3px solid blue";
}
