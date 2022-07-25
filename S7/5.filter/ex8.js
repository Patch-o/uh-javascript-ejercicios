const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];




const busca = (filtro) =>{
    const input$$ = filtro.target.previousElementSibling;     
    input$$ = document.querySelector('[data-function="toFilterStreamers"]')
    const buscar = streamers.filter( (friki) =>{
    friki.name.toLowerCase().includes(input$$.value.toLowerCase())
    
});
console.log(buscar);
};

const button$$ = document.querySelector('[data-function="toShowFilterStreamers"]')


button$$.addEventListener('click', busca)