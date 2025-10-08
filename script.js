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

/// Aqui é a pagina de jogos
const imagens=document.querySelectorAll("img[data-id]")
imagens.forEach(img=>{
    const id=img.getAttribute("data-id")
    const descricao=document.getElementById(id)
    img.addEventListener("mouseover",()=>{
        descricao.classList.add("mostrar")
    })
    img.addEventListener("mouseout",()=>{
        descricao.classList.remove("mostrar")
    })
})