fetch("https://ghibliapi.herokuapp.com/films")
  .then((res) => res.json())
  .then(printAnimes);

function printAnimes(animes) {
  const divFather$$ = document.createElement("div");
  divFather$$.classList.add("b-gallery");

  for (const anime of animes) {
    const div$$ = document.createElement("div");
    div$$.classList.add("b-gallery__item");

    div$$.innerHTML = `
        <h2 class="b-gallery__title">${anime.title}</h2>
        <img src="${anime.image}"/>
      `;

    divFather$$.appendChild(div$$);
  }

  document.body.appendChild(divFather$$);
}