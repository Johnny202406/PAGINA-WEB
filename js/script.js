
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