const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];



const respuesta = users.map ((user) =>
{if (user.name[0] === 'A') {
    return  'Anacleitus'
    
}
else{
    return user.name
} }
)


console.log(respuesta);