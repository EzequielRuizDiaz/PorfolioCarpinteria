// Este código es opcional y se usa para agregar una clase "carga" a las imágenes
// cuando se terminan de cargar. Esto se utiliza para aplicar transiciones CSS.

const imagenes = document.querySelectorAll('img');

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener('load', function() {
    this.classList.add('carga');
  });
}
