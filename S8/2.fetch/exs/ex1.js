
fetch ('https://api.agify.io?name=michael')
   .then((fet) => {
    return fet.json();
   })
   .then((miJson) =>{
    console.log(miJson);
   })