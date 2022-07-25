

function findArrayIndex(array,b) {
   for (let i = 0; i < array.length; i++) {
    const element = array[i];
     if (element === b){
        return i;
     }
   
   }

}

let bichos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
console.log(findArrayIndex(bichos,'Mosquito'));
