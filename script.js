const d = document;
const textArea = d.querySelector(".entrada__formulario");
const imagenMuneco = d.querySelector(".buscando__msj");
const loaderCarga = d.querySelector (".loader");
const resultadoTitulo = d.querySelector(".resultado__titulo");
const resultadoTexto = d.querySelector (".resultado__texto");
const botonEncriptar = d.querySelector(".form__boton");
const botonDesencriptar = d.querySelectorAll(".form__boton");
const botonCopiar = d.querySelector (".resultado_boton");


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

const llaves = [
    ["e", "enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

//Función para encriptar
function encriptarmensaje(mensaje){
    let mensajeEncriptado ="";
    for(let i = 0; i< mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++){
            if (letra == llaves[j][0]){
                encriptada = llaves[j][1];
            break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

//Función para Desencriptar
function desencriptarmensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i< llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g'); 
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

//Ocultar elementos dinamicamente
textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";
    loaderCarga.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando Mensaje";
    resultadoTexto.textContent ="";

});
//Función del botón encriptar
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();//evita que la página se reinicie al presionar un botón
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;//muestra el resultado en el espacio de h3 
    botonCopiar.classList.remove("hidden");//quita la propiedad del botón invisible de copiar
    resultadoTitulo.textContent = "EL resultado es: ";
});
botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarmensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "EL resultado es: ";
    botonCopiar.classList.remove("hidden");
    

});

botonCopiar.addEventListener("click", (e)=>{
    let textoCopiado = resultadoTexto. textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagenMuneco.style.display = "block";
        loaderCarga.classList.add("hidden");
        resultadoTitulo.textContent = "El texto se copio";
        botonCopiar.classList.add("hidden");
        resultadoTexto.textContent = "";
    }) 
});

