const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];
// includes

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.includes("Camiseta")) {
     console.log(product)
    }          
      

  }   