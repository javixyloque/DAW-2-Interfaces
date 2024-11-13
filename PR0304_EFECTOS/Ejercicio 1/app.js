document.addEventListener('DOMContentLoaded', ()=> {
    const menu = document.querySelector('nav');
    const boton = document.querySelector('button');
    let contador = 0;
    
    menu.setAttribute ("style", "display:none");
    boton.addEventListener('click', mostrarMenu);

    function mostrarMenu () {
        let usar = contador%2; 
        if (usar ==1) {
            menu.setAttribute("style", "display: none");
            contador++;
        } else if (usar ==0) {
            menu.setAttribute("style", "display: flex;");
            contador++;
        }
    }
}) 