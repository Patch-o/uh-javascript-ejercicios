const baseUrl = "https://api.nationalize.io";

const listener = () => {
  const input$$ = document.querySelector("input");
  fetch(baseUrl + "?name=" + input$$.value)
    .then((res) => res.json())

    .then((mijson) => {
      vengo(mijson);
    });
};

const vengo = (mijson) => {
  const elim$$= document.createElement("button");
  const p$$ = document.createElement("p");
  let texto = `El señor/a ${mijson.name} tiene`;
  let elimText =`X`;
  elim$$.addEventListener("click",() => erase(p$$));//1

  for (const country of mijson.country) {
    const porcentaje = Math.floor(country.probability * 100);
    texto += `un ${porcentaje} % de ser de ${country.country_id}`;
  }
  p$$.textContent = texto;
  elim$$.textContent = elimText;
  p$$.appendChild(elim$$);
  document.body.appendChild(p$$);
};
const erase = (p$$) => {//1
    p$$.remove()
}


const btn$$ = document.querySelector("button");

btn$$.addEventListener("click", listener);
