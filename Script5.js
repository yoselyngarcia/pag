document.addEventListener("DOMContentLoaded", function() {
  var menuItems = document.querySelectorAll("#menu li a");

  menuItems.forEach(function(item) {
    item.addEventListener("mouseover", function() {
      this.style.backgroundColor = "#3bc953";
    });

    item.addEventListener("mouseout", function() {
      this.style.backgroundColor = "transparent";
    });
  });
    
});

//____código para el texto explicativo de cada imagen_______________________________

// Obtener todas las imágenes
const imagenes = document.querySelectorAll('img');

// Obtener el elemento de texto
const texto = document.getElementById('texto');

// Iterar sobre cada imagen y agregar un evento de clic
imagenes.forEach((imagen, index) => {
  imagen.addEventListener('click', () => {
    // Definir diferentes textos explicativos para cada imagen
    let textoExplicativo;
    switch (index) {
      case 1:
        textoExplicativo = "La biotecnología es un conjunto de técnicas que utiliza células vivas, cultivo de tejidos o moléculas derivadas de un organismo, por ejemplo, enzimas, para obtener o modificar un producto, mejorar una planta o un animal o desarrollar un microorganismo para utilizarlo con un propósito específico.";
        break;
      case 2:
        textoExplicativo = "La biotecnología sirve para utilizar maquinaria biológica de otros seres vivos para beneficiar al hombre, es decir, utiliza células vivas para la creación de productos específicos. Sabiendo qué es la biotecnología, podemos entender mejor para qué sirve. Y es que, con la biotecnología, se consiguen medicamentos mejorados, alimentos saludables, cultivos más productivos, materiales más resistentes y fuentes de energía.";
        break;
      case 3:
        textoExplicativo = "En 1919, el ingeniero agrónomo Károly Ereki pensó que la biología podía utilizarse para convertir materias primas en productos útiles. Fusionó las palabras biología y tecnología y fue así como acuñó el término. La palabra biotecnología proviene del griego. Etimológicamente, por una parte, “bio” significa “vida”. Y “logía”, quiere decir “ciencia”.";
        break;
      
    }
    mostrarTexto(textoExplicativo); // Llamar a la función mostrarTexto con el texto explicativo correspondiente
  });
});

// Función para mostrar el texto explicativo
function mostrarTexto(textoExplicativo) {
  texto.textContent = textoExplicativo; // Actualizar el texto del elemento de texto con el texto explicativo proporcionado
}