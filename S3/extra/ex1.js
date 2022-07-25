const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

ul$$ = document.createElement('ul')

for(let pais of countries) {
     li$$ =  document.createElement('li')
     li$$.innerHTML = `${pais}`
     ul$$.appendChild(li$$)
     console.log(pais);
}

document.body.appendChild(ul$$)
