const baseUrl = 'https://api.nationalize.io';

const listener =() => {
    const input$$ = document.querySelector('input')

   fetch (baseUrl + '?name=' + input$$.value)
   .then (res =>  res.json())

    .then ( mijson => {
     vengo(mijson)
   })
}

const vengo = (mijson) => {
    const p$$ = document.createElement('p');
    let texto = `El señor/a ${mijson.name} tiene`;

    for (const country of mijson.country) {
        const porcentaje = Math.floor(country.probability * 100);
        texto += `un ${porcentaje} % de ser de ${country.country_id}`;
    }
    p$$.textContent = texto;
    document.body.appendChild(p$$)

}


const btn$$ = document.querySelector('button') ;

btn$$.addEventListener('click', listener);

