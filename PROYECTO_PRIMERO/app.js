document.addEventListener('DOMContentLoaded', () => {
    
    const boton = document.getElementById('boton');
    const aside = document.querySelector('aside');

    boton.addEventListener('click', () => {
       
        aside.classList.toggle('plegado');
        
        boton.classList.toggle('plegado');
    });

     
});