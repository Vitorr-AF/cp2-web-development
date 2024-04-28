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

slides();