
function Somar(){
    if (div1.value==""||div2.value==""){
        window.alert("Preencha todos os campos alma sebosa")
        document.getElementById("saidacalculadora").innerHTML=""
    }
    let entrada1=document.getElementById("div1")
    let entrada2=document.getElementById("div2")
    let num1=Number(entrada1.value) 
    let num2=Number(entrada2.value)
    let soma=num1+num2
    document.getElementById("saidacalculadora").innerHTML="O resultado da soma de "+num1+"e "+num2+" É igual a "+soma
    entrada1.value=""
    entrada2.value=""
}
function Subtrair(){
    if (div1.value==""||div2.value==""){
        window.alert("Preencha todos os campos alma sebosa")
        document.getElementById("saidacalculadora").innerHTML=""
    }
    let entrada1=document.getElementById("div1")
    let entrada2=document.getElementById("div2")
    let num1=Number(entrada1.value) 
    let num2=Number(entrada2.value)
    let sub=num1-num2
    document.getElementById("saidacalculadora").innerHTML="O resultado da subtração de "+num1+" menos "+num2+" É igual a "+sub
    entrada1.value=""
    entrada2.value=""
}
function Dividir(){
    if (div1.value==""||div2.value==""){
        window.alert("Preencha todos os campos alma sebosa")
        document.getElementById("saidacalculadora").innerHTML=""
    }
    let entrada1=document.getElementById("div1")
    let entrada2=document.getElementById("div2")
    let num1=Number(entrada1.value) 
    let num2=Number(entrada2.value)
    let div=num1/num2
    document.getElementById("saidacalculadora").innerHTML="O resultado da divisão de "+num1+" por "+num2+" É igual a "+div
    entrada1.value=""
    entrada2.value=""
}
function Multiplicar(){
    if (div1.value==""||div2.value==""){
        window.alert("Preencha todos os campos alma sebosa")
        document.getElementById("saidacalculadora").innerHTML=""
    }
    let entrada1=document.getElementById("div1")
    let entrada2=document.getElementById("div2")
    let num1=Number(entrada1.value) 
    let num2=Number(entrada2.value)
    let multi=num1*num2
    document.getElementById("saidacalculadora").innerHTML="O resultado da multiplicação de "+num1+" por "+num2+" É igual a "+multi
    entrada1.value=""
    entrada2.value=""
}
function começar(){
    document.getElementById("IMC").innerHTML=""
    let onde=document.getElementById("IMC")

    let mensagem="Digite o seu peso em kg e altura em cm "
    let texto=document.createElement("h2")
    texto.textContent=mensagem
    onde.appendChild(texto)
    let entrada1=document.createElement("input")
    let entrada2=document.createElement("input")
    onde.appendChild(entrada1)
    onde.appendChild(entrada2)
    entrada1.type="text"
    entrada2.type="text"
    entrada1.id="entrada1"
    entrada2.id="entrada2"
    entrada1.placeholder="Digite a altura aqui"
    entrada2.placeholder="Digite seu peso aqui"
    let botao=document.createElement("button")
    botao.textContent="Enviar"
    botao.onclick=enviar
    onde.appendChild(botao)
    let limpar=document.createElement("button")
    limpar.textContent="Limpar"
    onde.appendChild(limpar)
    limpar.onclick=clear
    function enviar(){
        let imc1=document.getElementById("entrada1")
        let imc2=document.getElementById("entrada2")
        let num1=Number(imc1.value)/100
        let num2=Number(imc2.value)
        if (imc2.value===""||imc1.value===""){
            window.alert("Preencha todos os campos")
            saida.innerHTML=""
        }
        if (isNaN(num1)||isNaN(num2)){
            window.alert("Digite apenas numeros")
            saida.innerHTML=""
        }
        else{
            let imc=num2/(num1*num1)
            let saida=document.createElement("h2")
            saida.id="saida"
            saida.textContent="Seu IMC é de: "+imc
            onde.appendChild(saida)
        }
    }
    function clear(){
        let saida=document.querySelectorAll("saida")
        saida.textContent=""
    }
}
