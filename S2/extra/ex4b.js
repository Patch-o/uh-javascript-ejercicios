function findArrayIndex(array,b) {
    for (let i = 0; i < array.length; i++) {
     const element = array[i];
      if (element === b){
         return i;
      }
    
    }
 
 }
  function removeItem(array,b) {
     const x = findArrayIndex(array,b)
      array.splice(x,1);
      return array
  }



 let bichos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
 console.log(findArrayIndex(bichos,'Mosquito'));
 