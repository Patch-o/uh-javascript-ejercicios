// Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date.
//  Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...  
// Cuando lo tengas crea un div para cada nota del diario e 
//introduce un ``<h3>``, un  ``<h5>`` y un ``<p>`` 
// para su .title, .date y .description respectivamente.  
// Finalmente añade un botón para poder eliminar las notas del diario.
//  En concreto hay una que a Eliot no le apetece recordar mucho


fetch("http://localhost:3000/diary")
.then ((res) =>   res.json())
.then ( agends => {
     const agendaOrdenada = fechas(agends); 
     pinta (agendaOrdenada);    
     
})
const fechas = (agends) => {
     return agends.sort((a,b) => new Date(a.date) - new Date(b.date))

}
const pinta = (agends) => {
     for (const agend of agends) {
          const div$$ = document.createElement('div');
          const h$$ = document.createElement('h3');
          const H$$ = document.createElement('h5');
          const p$$ = document.createElement('p');                          
          h$$.innerHTML = `${ agend.title}`
          H$$.innerHTML = `${agend.date}`
          p$$.innerHTML = `${agend.description}`
          h$$.appendChild(H$$)
          
          H$$.appendChild(p$$)
          div$$.appendChild(h$$)
          
          document.body.appendChild(div$$)
          
          const button$$ = document.createElement('button')
          button$$.addEventListener('click', () => erase(div$$))
          p$$.appendChild (button$$)
          button$$.textContent = 'X' 
     }
     
}

const erase  = (agends) => {
     agends.remove();
}