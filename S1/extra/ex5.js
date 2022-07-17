//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos
//y mostrar por consola la media de ventas.

const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];
let media = [0];
;
 for (let i = 0; i < products.length; i++) {
    const product = products[i];
     media.push (product.sellCount);   
 }
 let mediaAll=0;
 for (const acc of media) {
    mediaAll += acc;
 }
  
 mediaAll = mediaAll/products.length


 console.log(mediaAll);