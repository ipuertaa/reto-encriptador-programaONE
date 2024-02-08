            //Programa de JavaScript para el reto encriptador



/* Para tener en cuenta: llaves de encriptación: 

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"  */ 


//Función para encriptar texto
function encriptarTexto(){
    
    let mensajeNoEncriptado = document.getElementById("textoUsuario").value;
    let resultadoEncriptado = '';


    for (var i = 0; i < mensajeNoEncriptado.length; i++){
        switch (mensajeNoEncriptado[i]){
            case 'a':
                resultadoEncriptado += 'ai';
                break;
            
            case 'e':
                resultadoEncriptado += 'enter';
                break;
            
            case 'i':
                resultadoEncriptado += 'imes';
                break;
        
            case 'o':
                resultadoEncriptado += 'ober';
                break;
            
            case 'u':
                resultadoEncriptado += 'ufat';
                break;
            
            default:
                resultadoEncriptado += mensajeNoEncriptado[i];
                break;
        }
    }
    document.getElementById("imagen").style.display = "none";
    asignarTextoElemento('espacioResultado', resultadoEncriptado);
    document.getElementById("textoUsuario").value = "";
    document.getElementById("copiar").style.display = "inline";
}


//Función para asignar texto
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;     
}

//Función para desencriptar texto
function desencriptarTexto(){
    let mensajeEncriptado = document.getElementById("textoUsuario").value;
    let resultadoDesencriptado = '';
    resultadoDesencriptado = mensajeEncriptado.replaceAll('ai', 'a');
    resultadoDesencriptado = resultadoDesencriptado.replaceAll('enter', 'e');
    resultadoDesencriptado = resultadoDesencriptado.replaceAll('imes', 'i');
    resultadoDesencriptado = resultadoDesencriptado.replaceAll('ober', 'o');
    resultadoDesencriptado = resultadoDesencriptado.replaceAll('ufat', 'u'); 
    asignarTextoElemento('espacioResultado', resultadoDesencriptado);
}












