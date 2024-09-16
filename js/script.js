
let menu=document.querySelector('.menu')

let clickMenu=document.querySelector('.click-menu')

let button=document.querySelector('.button')

let mas=document.querySelector('.mas')

const otro=document.querySelectorAll('.otro')


button.addEventListener("click", () => 
    window.scroll({ 
            top: 0,
            behavior: "smooth",
     })
);

mas.addEventListener("click", ()=>{
    mas.classList.toggle('girar')
    for(let index of otro) {
    
        index.classList.toggle('mostrarse')
        
    }
});
   



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


menu.addEventListener("click", ()=>{
    
        clickMenu.classList.toggle('verse')
   
});


// convertir todo a minusculas
let descripcion=document.querySelectorAll('.description')


for(let index of descripcion) {
    
    index.innerHTML = index.innerHTML.toLowerCase()
    
}