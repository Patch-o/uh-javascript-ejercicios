const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];



for (let i = 0; i < countries.length; i++) {
    const gallery = countries[i];
    div$$ = document.createElement('div')
    div$$.innerHTML = `<img class='img' src="${gallery.imgUrl}"/> <h4> ${gallery.title}</h4>`
    document.body.appendChild(div$$)
    
}