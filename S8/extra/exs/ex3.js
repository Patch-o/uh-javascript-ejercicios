fetch (`http://localhost:3000/orders`).then (res => res.json())
.then ((pedidos) => {
    ordenFechas(pedidos);
    pintaPedidos(pedidos);
   console.log(pedidos);
})
fetch (`http://localhost:3000/products`).then ( res => res.json())
.then ((productos) => {
    pintaProductos(productos)
    console.log(productos);
})
const ordenFechas = (pedidos) => {
    return pedidos.sort((a,b) => new Date(a.date) - new Date (b.date))
    
}
const divPa$$ = document.createElement('div')

let pedd=[]

const pintaPedidos = (pedidos) => {
    for (let ped = 0; ped < pedidos.length; ped++) {
        const element = pedidos[ped];
        for (let p = 0; p < element.products.length; p++) {
            const elementp = element.products[p];
            const h1$$ = document.createElement('h1')
            h1$$.innerHTML= `${element.date} se pidieron productos de tipo ${elementp.productId} y se vendieron ${elementp.quantity}`
            divPa$$.appendChild(h1$$)
            pedd.push(elementp.productId,elementp.quantity)
            
            //console.log(elementp.productId, elementp.quantity);
           
        }
        
        
        
        //console.log(element.products.productId);
    }

}
   


const  pintaProductos = (productos) => {
    for (let prod = 0; prod < productos.length; prod++) {
        const e = productos[prod];
        h1$$.innerHTML = ``
        //pedd.push(e.id,e.name)
       // console.log(e.id, e.name);
         
    }
}



console.log(pedd);
document.body.appendChild(divPa$$)