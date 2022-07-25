//REPETIR EJERCICIO

fetch("https://breakingbadapi.com/api/characters")
  .then((res) => res.json())
  .then((persons) => {
    creadorBb(persons);
  });

const creadorBb = (persons) => {
  for (const person of persons) {
    const div$$ = document.createElement("div");

    div$$.innerHTML = ` ${person.name} estado ${person.status} <img src =${person.img}/>`;
    document.body.appendChild(div$$);
  }
};
const listener = () => {
  const div$$ = document.querySelectorAll("div");
};



// hoiver para animacion
