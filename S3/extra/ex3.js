const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div$$ = document.querySelector('[data-function="printHere"]');
const ul$$ = document.createElement('ul');

for (const car of cars) {
   
    const li$$ =  document.createElement('li')
    li$$.innerHTML = `${car}`
    ul$$.appendChild(li$$)
        
}
div$$.appendChild(ul$$)
/
document.body.appendChild(div$$)