    //função = nome é TocaSomToim
function TocaSomToim(idSom) {
    //tocando o som toim
    document.querySelector(idSom).play();
}

//constante = nome lista 
//tecla botões
const Lista = document.querySelectorAll('.tecla');


let Contador = 0;

while (Contador < Lista.length) {
    Lista[Contador].onclick = TocaSomToim;
    Contador = Contador + 1;
    console.log(Contador);
}
