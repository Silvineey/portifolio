/// aqui é a pagina de portifolio na parte do main
function abrirgaleria33(){
    esconder()
    const menu=document.getElementById("galeriaexp33")
    menu.style.display="flex"
}
function galeriatlou(){
    esconder()
    const menu=document.getElementById("galeriatlou")
    menu.style.display="flex"
}
function sky(){
    esconder()
    const menu=document.getElementById("galeriasky")
    menu.style.display="flex"
}

function galerianaruto(){
    esconder()
    const menu=document.getElementById("galerianaruto")
    menu.style.display="flex"
}
function galeriajedi(){
    esconder()
    const menu=document.getElementById("galeriajedi")
    menu.style.display="flex"
}
function uncharted(){
    esconder()
    const menu=document.getElementById("galeriaunc")
    menu.style.display="flex"
}
function poter(){
    esconder()
    const menu=document.getElementById("poter")
    menu.style.display="flex"
}
function miranha(){
    esconder()
    const menu=document.getElementById("miranha")
    menu.style.display="flex"
}
function esconder(){
    const galeria=document.querySelectorAll(".galeria")
    galeria.forEach(galerias=>{
        galerias.style.display="none"
    })
}

function aparecer(){
    const oculto=document.getElementById("oculto")
    oculto.classList.add("mostrar")
}
function sumir(){
    const oculto=document.getElementById("oculto")
    oculto.classList.remove("mostrar")
}

/// Aqui é a pagina de jogo e anime no portifolio


/// aqui é as telas de login page
const validar=[
    "@hotmail.com","@gmail.com","@outlook.com","@yahoo.com"
]
let valido=false;
function logar(){
    let entradaemail=document.getElementById("entradaemail")
    let entradasenha=document.getElementById("entradasenha")
    let valorsenha=entradasenha.value 
    let valoremail=entradaemail.value
    if(entradasenha.value.length<=4){
        window.alert("A senha precisa ter mais que 4 caracteres")
    }
    validar.forEach(function(dominios){
        if(valoremail.includes(dominios)){
            valido=true
        }
    })
    if(!valido){
        window.alert("email inválido")
    }
    else{
        window.location.href="index.html"

    }
}
function cadastro(){
    const cadastro=document.querySelector(".cadastro")
    const menu=document.querySelector(".caixa")
    menu.style.display="none"
    cadastro.style.display="flex"
}