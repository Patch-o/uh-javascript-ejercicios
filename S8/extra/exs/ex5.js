baseUrl = `https://opentdb.com/api_config.php`;

divPapa$$ = document.querySelector('[data-function="gameboard"]')
input$$ = document.querySelector('[data-function="questions-number"]')
buttonStart$$ = document.querySelectorAll('[data-function="start-game"]')
buttonFinish$$ = document.querySelector('[data-function="check-game"]')

const init=()=>
{fetch(`https://opentdb.com/api.php?amount=10`)
  .then((res) => res.json())
  .then((trivial) => {
    console.log(trivial);
    pintaPregunta(trivial);    
  })
}


const pintaPregunta = (trivial) => {
  for (const pregunta of trivial.results) {
    
    pregunta.incorrect_answers.push(pregunta.correct_answer);  //declaro array de respuestas

    divPregunta$$ = document.createElement("div");
    divPregunta$$.innerHTML = pregunta.question;
    divPapa$$.appendChild(divPregunta$$);
    for (const respuesta of pregunta.incorrect_answers) {  //bucle de respuestas
        
        
        h2$$= document.createElement('h2')
        h2$$.innerHTML= respuesta

        divPregunta$$.appendChild(h2$$)
        
    }
  }
}




init();

document.body.appendChild(divPapa$$);
