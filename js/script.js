// Variables constantes

const textArea = document.getElementById('texto'); 
const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');
const showResult = document.querySelector(".show-result");
const validar = document.querySelector(".span-alert");
const parrafoValidar = document.querySelector(".alert-p");
const btnCopiar = document.querySelector(".btnCopiar")
const circle = document.getElementById('circle');
(() => {

    btnEncriptar.addEventListener('click', encriptarTexto);
    btnDesencriptar.addEventListener('click', desencriptarTexto);
    showResult.addEventListener('click', copiarTexto);

})()

function encriptarTexto(){
    let texto = textArea.value;
    if (removerAcentos(texto)){
        return
    }
    let textoEncriptado = texto.replace(/e/img, 'enter');
    textoEncriptado = textoEncriptado.replace(/i/mg, 'imes');
    textoEncriptado = textoEncriptado.replace(/a/mg, 'ai');
    textoEncriptado = textoEncriptado.replace(/o/mg, 'ober');
    textoEncriptado = textoEncriptado.replace(/u/mg, 'ufat');
    mostrarHTML(textoEncriptado)
    textArea.value = '';
}

function removerAcentos(texto){
    if (texto === ""){
        parrafoValidar.innerText = "Ingrese un texto primero";
        validar.classList.add('error');
        setTimeout(() => {
            parrafoValidar.innerText = "Solo letras minusculas y sin acentos";
            validar.classList.remove('error');
        }, 1500);
        return true;
    };
    if (texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "") !== texto && texto !== texto.toLowerCase()){
        parrafoValidar.innerText = "TE DIJE QUE SIN MAYUSCULAS NI ACENTO PAYASO";
        validar.classList.add('error');
        
        setTimeout(() => {
            parrafoValidar.innerText = "Solo letras minusculas y sin acentos";
            validar.classList.remove('error');
        }, 1500);
        return true;
    };
    if (texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "") !== texto){
        parrafoValidar.innerText = "Ingrese un texto sin acentos";
        validar.classList.add('error');

        setTimeout(() => {
            parrafoValidar.innerText = "Solo letras minusculas y sin acentos";
            validar.classList.remove('error');
        }, 1500);
        return true;
    };
    if (texto !== texto.toLowerCase()){
        parrafoValidar.innerText = "Ingrese un texto sin mayusculas";
        validar.classList.add('error');
        setTimeout(() => {
            parrafoValidar.innerText = "Solo letras minusculas y sin acentos";
            validar.classList.remove('error');
        }, 1500);
        return true;
    };
    return false
}

function mostrarHTML(textoEncriptado){
    showResult.innerHTML = `
        <textarea>${textoEncriptado}</textarea>
        <button class="btnCopiar">Copiar</button>
        `;
    // showResult.innerHTML = `<h3 class="loading">Loading...</h3>`
    // setTimeout(() => {
    //     showResult.innerHTML = `
    //     <textarea>${textoEncriptado}</textarea>
    //     <button class="btnCopiar">Copiar</button>
    //     `
    // }, 10000000);
}

function copiarTexto(){
    const textoEncriptado = document.querySelector('.show-result textarea');
    textoEncriptado.select();
    document.execCommand('copy');
}

function desencriptarTexto(){
    let text = textArea.value;
    text = text.toLowerCase();
    let textoEncriptado = text.replace(/enter/mg, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/mg, 'i');
    textoEncriptado = textoEncriptado.replace(/ai/mg, 'a');
    textoEncriptado = textoEncriptado.replace(/ober/mg, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/mg, 'u');
    mostrarHTML(textoEncriptado)
    document.querySelector("#texto").value = '';
}