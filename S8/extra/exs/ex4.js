//const guerrero$$ = document.createElement('div');

fetch("http://localhost:3000/planets")
  .then((res) => res.json())
  .then((planetas) => {
    pinta(planetas);
    busca();
    console.log(planetas);
  });

const divHead$$ = document.createElement("div");
divHead$$.classList.add("planeta");

const pinta = (planetas) => {
  for (const planeta of planetas) {
    
    const divPl$$ = document.createElement("div");
    divPl$$.innerHTML = `<img height=300vh;  src="${planeta.image}"/><h1>Los guerreros de: ${planeta.name}</h1>`;
    divHead$$.appendChild(divPl$$);
    document.body.appendChild(divHead$$);
    divPl$$.addEventListener('click', () => filtroPlanetas(planeta.id)) //planeta.id se transforma en ##4
}
}; 

  const busca = () => { 
    const divSe$$ = document.createElement("div");
    const input$$ = document.createElement("input");
      const button$$ = document.createElement("button");
    
  //divSe$$.innerHTML = `<input>${??????}</input><button>${??????}</button>`// como manipular el fetch desde el input de esta manera?
    button$$.textContent = 'BUSCA TUS GUERREROS!'
  divSe$$.appendChild(input$$);
  divSe$$.appendChild(button$$);// no puedes hacer appenchild entre button e input
  document.body.appendChild(divSe$$);
  button$$.addEventListener('click', () => filtroGuerreros(input$$.value))
}
const divW$$ = document.createElement('div')

let guerrerosDisplay = [];
const filtroPlanetas = (idPlanet) => {//##4
       
           //ESTO ES EL RESETEO DE IMAGEN AL PINCHAR NUEVOI PLANETA
       
       fetch('http://localhost:3000/characters?idPlanet=' + idPlanet).then (res => res.json())
       .then ( guerreros => {
            guerrerosDisplay = [...guerreros];
            //busca()
            pintaGuerreros(guerreros)          
       })
}

const filtroGuerreros = (nombreGuerrero) => {
    const guerreroFiltrado =   guerrerosDisplay.filter((guerrerosDisplay) => guerrerosDisplay.name.toLowerCase() === nombreGuerrero.toLowerCase())
        
     pintaGuerreros(guerreroFiltrado);
    }


const pintaGuerreros = (guerreros) => {
     divW$$.innerHTML ='';
    for (const guerrero of guerreros) {
        const guerreros$$ = document.createElement('div')
        
        guerreros$$.innerHTML = `<img height="200" src='${guerrero.avatar}'/><h2>${guerrero.name}</h2>`;

        divW$$.appendChild(guerreros$$)
    
        
    
    }
    document.body.appendChild(divW$$);
}   
