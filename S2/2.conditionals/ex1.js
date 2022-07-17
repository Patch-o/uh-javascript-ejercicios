const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let i of alumns) {
  let count = 0;
  if (i.T1 == true) {
    count++;
  }
  if (i.T2 == true) {
    count++;
  }
  if (i.T3 == true) {
    count++;
  }
  if (count >= 2) {
    i.isApproved = true 
}
    else  {
    i.isApproved = false 
    }
  

   }
   console.log(alumns)




