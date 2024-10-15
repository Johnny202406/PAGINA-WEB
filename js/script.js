
let button=document.querySelector('.button')

button.addEventListener("click", () => 
    window.scroll({ 
            top: 0,
            behavior: "smooth",
     })
);

   
window.onscroll = function (){
    // Obtenemos la posicion del scroll en pantall
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

    // Realizamos alguna accion cuando el scroll este entre la posicion 
    if(scroll > 500 ){
        button.classList.add('mostrarse');

    } else if (scroll < 500) {
        button.classList.remove('mostrarse');
    }
}


// convertir todo a minusculas
let descripcion=document.querySelectorAll('.description')

for(let index of descripcion) {
    
    index.innerHTML = index.innerHTML.toLowerCase()
    
}


// CARRUSEL
const carrusel = document.querySelector('.carrusel');
const images = document.querySelectorAll('.carrusel img');
let currentIndex = 0;

function moveTo(index) {
    // Asegúrate de que el índice esté dentro de los límites
    if (index < 0) {
        index = images.length - 1; // Volver al último

    } else if (index >= images.length) {
        index = 0; // Volver al primero
    }

    // Calcula el desplazamiento y aplica la transformación
    const scrollTo = index * carrusel.clientWidth;

    carrusel.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
    });

    // Actualiza el índice actual
    currentIndex = index;
}

// Manejo de clics en las flechas
document.querySelector('.izquierda').addEventListener('click', () => {
    moveTo(currentIndex - 1);
});

document.querySelector('.derecha').addEventListener('click', () => {
    moveTo(currentIndex + 1);
});
