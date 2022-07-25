fetch(`https://ghibliapi.herokuapp.com/films`)
  .then((res) => res.json())
  .then((pelis) => {
    console.log(pelis);
    galeria(pelis);
  });
const divPapa$$ = document.createElement("div");
divPapa$$.classList.add("papa");

const galeria = (pelis) => {
  for (let i = 0; i < pelis.length; i++) {
    const element = pelis[i];
    const divGallery$$ = document.createElement("div");
    divGallery$$.classList.add("galerias");
    divGallery$$.innerHTML = `<img class='img'src='${element.image}'/> 
    <h1>${element.original_title}</h1>
    <p>(${element.original_title_romanised})</p>`;
    //const img$$ = document.createElement("img");
    //img$$.setAttribute("src", element.image);
    //divGallery$$.appendChild(img$$)
    divPapa$$.appendChild(divGallery$$);
  }
};

document.body.appendChild(divPapa$$);
