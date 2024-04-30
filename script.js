// SlideShow
let ssImagens = ['./img/img1.png', './img/img2.png', './img/img3.png', './img/img4.png'];
let index = 0;
let time = 3000;

function slides(){
    document.getElementById("imagensBanner").src=ssImagens[index];
    index++;

    if(index == ssImagens.length){
        index=0;
    }
    setTimeout('slides', time);
}


// Mudar fundo
let fundoPrincipal = document.querySelector('.box3');
let cores = ['red', 'green', 'blue'];
let corIndex = 0;

function MudarFundo() {
    fundoPrincipal.style.backgroundColor = cores[corIndex];
    corIndex = (corIndex + 1) % cores.length; // Para garantir que o índice permaneça dentro dos limites do array
    setTimeout(MudarFundo, time);
}

MudarFundo();
slides();