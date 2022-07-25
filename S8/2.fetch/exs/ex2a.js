const baseUrl = 'https://api.nationalize.io?name=';

function listener (){
   fetch (baseUrl + input$$.value).then ((res) => {
    return res.json();
   })
   .then ((mijson) => {
    console.log(mijson);
   })
    
}

const btn$$ = document.querySelector('button') 
const input$$ = document.querySelector('input')

btn$$.addEventListener('click', listener);






