const respuesta = (evento) => {
  console.log(evento.target.value);
};

input$$ = document.querySelector("input");

input$$.addEventListener("focus", respuesta);
