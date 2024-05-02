
let enviar = document.querySelector("#form")
enviar.addEventListener('submit', function(event){
    event.preventDefault()

    let nome = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let celular = parseInt(document.querySelector(".celular").value);

    console.log(nome, email, celular)
})
