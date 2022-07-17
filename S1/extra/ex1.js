const users = [
  { name: "Abel", years: 43 },
  { name: "Maria", years: 18 },
  { name: "Pedro", years: 14 },
  { name: "Samantha", years: 32 },
  { name: "Raquel", years: 16 },
];
for (let i = 0; i < users.length; i++) {
  const user = users[i];

if (users.years >= 18) {
  console.log("Usuarios menores de edad:" + user.name);
} else {
  console.log("Usuarios mayores de edad:" + user.name);
}
   }