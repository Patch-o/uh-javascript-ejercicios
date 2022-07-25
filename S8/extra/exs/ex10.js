const baseUrl = `http://localhost:3000/characters`;

let page = 1;
const divPapa$$=document.createElement('div')
divPapa$$.classList.add("papa")
document.body.appendChild(divPapa$$)

function nextPage() {
    if (page < 4) {
        page++;
     } else {
       button$$.remove()
     }
    
}

const lol = () => { 
     fetch( baseUrl + `?_page=${page}&_limit=5`)
.then ( res => res.json())
.then ( champions => {
    pintaChampions(champions)
   nextPage(champions)  

})
}
const pintaChampions = (champions) => {
   
    for (const champion of champions) {
        const divProfile$$ = document.createElement('div');
        const image$$ = document.createElement('img')
        const h2$$ = document.createElement('h2')
        h2$$.classList.add("text")
        divProfile$$.classList.add("profile")
        image$$.classList.add("champion")
        image$$.setAttribute("src", champion.image);
        h2$$.textContent = champion.name;
        divProfile$$.appendChild(image$$);
        divProfile$$.appendChild(h2$$);
       divPapa$$.appendChild(divProfile$$);
    } 
}

const cargaMas = () => {
    button$$ = document.createElement('button')
    button$$.textContent= 'DAME MAS!'
    button$$.addEventListener('click', () => lol())
    button$$.classList.add('boton')
    document.body.appendChild(button$$)
}



lol();
cargaMas();