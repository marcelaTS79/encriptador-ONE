function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("mensaje__encriptado");
    let parrafo = document.getElementById("parrafo");
    let lupa = document.getElementById("lupa");
    let botonCopiar = document.getElementById("button__copiar");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = textoCifrado;
      parrafo.textContent = "";
      lupa.src = "./img/encriptado.jpg";
      botonCopiar.classList.remove('bn_ocultar');
      botonCopiar.classList.add('bn_mostrar');
    } else {
      lupa.src = "./img/lupa.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Debes ingresar un texto");
      botonCopiar.classList.remove('bn_mostrar');
      botonCopiar.classList.add('bn_ocultar');
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("mensaje__encriptado");
    let parrafo = document.getElementById("parrafo");
    let lupa = document.getElementById("lupa");
    let botonCopiar = document.getElementById("button__copiar");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = textoCifrado;
        parrafo.textContent = "";
        lupa.src = "./img/desencriptado.jpg";
        botonCopiar.classList.remove('bn_ocultar');
        botonCopiar.classList.add('bn_mostrar');
      } else {
        lupa.src = "./img/lupa.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("!HOOO...No has ingresado texto");
        botonCopiar.classList.remove('bn_mostrar');
        botonCopiar.classList.add('bn_ocultar');
      }
  }

  function copiarTexto() {
    let texto = document.getElementById("mensaje__encriptado").textContent;
    navigator.clipboard.writeText(texto).then(function() {
        swal("Texto copiado", "El texto ha sido copiado al portapapeles", "success");
    }, function(err) {
        swal("Error", "Hubo un error al copiar el texto", "error");
    });
}

document.getElementById("button__copiar").addEventListener('click', copiarTexto);