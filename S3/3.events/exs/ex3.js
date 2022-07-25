function hola(evento){
    console.log(evento.target.value);
}

const input$$ = document.querySelector('input');
 
input$$.addEventListener('input', hola);