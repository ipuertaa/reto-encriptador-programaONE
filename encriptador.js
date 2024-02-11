            //Programa de JavaScript para el reto encriptador



/* Para tener en cuenta: llaves de encriptación: 

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"  */ 

//Función para verificar el texto ingresado
function verificarTexto(modo){
    const caracteres_validos = /^[a-z ]+$/;
    let texto = document.getElementById("textoUsuario").value;
    if(caracteres_validos.test(texto)){

        if (modo == 1){
            encriptarTexto(texto);
        }
        else{
            desencriptarTexto(texto)
        }
        
    } 
    else{
        alert('Error: ingrese únicamente letras minúsculas');
    }
}


//Función para encriptar texto
function encriptarTexto(mensajeNoEncriptado){
    
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

    asignarTextoElemento('espacioResultado', resultadoEncriptado);
    estilo();
}


//Función para asignar texto
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;     
}

//Función para desencriptar texto
function desencriptarTexto(mensajeEncriptado){

    let resultadoDesencriptado = '';
    resultadoDesencriptado = mensajeEncriptado.replaceAll('ai', 'a');
    resultadoDesencriptado = resultadoDesencriptado.replaceAll('enter', 'e');
    resultadoDesencriptado = resultadoDesencriptado.replaceAll('imes', 'i');
    resultadoDesencriptado = resultadoDesencriptado.replaceAll('ober', 'o');
    resultadoDesencriptado = resultadoDesencriptado.replaceAll('ufat', 'u'); 
    asignarTextoElemento('espacioResultado', resultadoDesencriptado);
    estilo();

}

//Función para copiar contenido
function copiarContenido(){

    let texto = document.getElementById("espacioResultado").innerHTML;

    navigator.clipboard.writeText(texto)
    .then(() => {
      console.log('Texto copiado al portapapeles')
    })
    .catch(err => {
      console.error('Error al copiar al portapapeles:', err)
    })


    asignarTextoElemento('espacioResultado', "")
    document.getElementById("imagen").style.display = "inline";
    document.getElementById("texto_inicial").style.display = "inline";
    document.getElementById("texto_inicial").style.fontWeight = "normal";
}

//Función para organizar el estilo después de oprimir el boton encriptar o desencriptar
function estilo(){
    document.getElementById("imagen").style.display = "none";
    document.getElementById("textoUsuario").value = "";
    document.getElementById("copiar").style.display = "inline";
    document.getElementById("texto_inicial").style.display = "none";
    document.getElementById("espacioResultado").style.fontSize = "1.5em";

}