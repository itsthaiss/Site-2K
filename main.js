    //função = nome é TocaSomToim
function TocaSom(idSom) {
    //tocando o som toim
    document.querySelector(idSom).play();
}

//constante = nome lista 
//tecla botões
const Lista = document.querySelectorAll('.tecla');


let Contador = 0;

while (Contador < Lista.length) {
    const classe1 = Lista[Contador]. classList[1];
    console.log(classe1);
    
    const idSomOficial = `#som_${classe1}`;
    console.log(idSomOficial);

    Lista[Contador].onclick = function() {
        TocaSom(idSomOficial);
}
    
Contador = Contador + 1;
tecla.onkeydown = function (evento) {
   tecla.classList.add("ativa");
   console.log(evento.code);
}
tecla.onkeyup = function(){
    tecla.classList.remove("ativa");
}
    console.log(Contador);
}
