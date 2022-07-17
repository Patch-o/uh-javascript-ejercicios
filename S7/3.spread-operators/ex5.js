const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const copy =[...colors];
[...copy].splice(2,1);
console.log(colors)