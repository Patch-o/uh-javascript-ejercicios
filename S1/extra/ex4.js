const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

let sum=[0];
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum.push(product.sellCount);       
}
console.log(sum);
 let sumTotal =0;
for (const sells of sum) {
    sumTotal += sells ;

}
console.log(sumTotal);