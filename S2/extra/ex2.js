//estaba haciendo for in y push como loco intentando aislar los volumenes porque no se me ocurria como utilizar las propiedades de los bucles
//, entendia que for in era para manipular el objeto y el for of para englobarlo, pero al no saber como desarrollarlo me puse a hacer los push... 
// luego pedi ayuda a gonzalo y me explico como hacer el for in dentro del for of

const users = [
  {name: 'Manolo el del bombo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 50},
          rain: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'Mortadelo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 30},
          shower: {format: 'ogg', volume: 55},
          train: {format: 'mp3', volume: 60},
      }
  },
  {name: 'Super Lopez',
      favoritesSounds: {
          shower: {format: 'mp3', volume: 50},
          train: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'El culebra',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 67},
          wind: {format: 'ogg', volume: 35},
          firecamp: {format: 'mp3', volume: 60},
      }
  },
]
let x =0;//1contador

let media = 0 ;
for (const user of users) {
  for (const key in user.favoritesSounds) {
     const sound = user.favoritesSounds[key];
     media += sound.volume;
        x++;//1contador que es para sacar el numero de usuarios

  }
  
}
 let mediaAll = (media/x);
console.log(mediaAll);