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
    const tecla = Lista[Contador]
    const classe1 =tecla.classList[1];
    console.log(classe1);
    
    const idSomOficial = `#som_${classe1}`;
    console.log(idSomOficial);

   tecla.onclick = function() {
        TocaSom(idSomOficial);
}
    
Contador = Contador + 1;

tecla.onkeydown = function (evento) {
    if(evento.code === 'Space' || evento.code === 'Enter'){
   tecla.classList.add("ativa");
   console.log(evento.code === 'Space' || evento.code === 'Enter' );
    }
}
tecla.onkeyup = function(){
    tecla.classList.remove("ativa");
}
}
