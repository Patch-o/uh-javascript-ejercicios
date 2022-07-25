const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];


const frikis = (friki) => {
    const fri = streamers.filter( frok => frok.name.toLowerCase().includes(input$$.value.toLowerCase()))
    console.log(fri);
}


input$$ = document.querySelector('[data-function="toFilterStreamers"]')
input$$.addEventListener('input', frikis)