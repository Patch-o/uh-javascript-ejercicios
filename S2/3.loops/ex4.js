const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];
for (let i = 0; i < toys.length; i++) {
  const toy = toys[i];
  if (toy.name.includes("gato")) {
    toys.splice(i,1);
    i--;
  }
  
 
}
    

console.log (toys)