function TocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}

const Lista = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < 9) {
    Lista[Contador].onclick = TocaSomToim;
    Contador = Contador + 1;
    console.log(Contador);
}


