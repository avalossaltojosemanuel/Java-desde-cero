const products = [
    { name: "Mouse", price: 250 },
    { name: "Teclado", price: 500 },
    { name: "Monitor", price: 3500 }
];

const priceLabels = products.map(  item=> {
    return (`${item.name}: cuesta ${item.price} USD`)

});

console.log(priceLabels);