const products = [
    { name: "Mouse", price: 250 },
    { name: "Teclado", price: 500 },
    { name: "Monitor", price: 3500 },
    { name: "Laptop", price: 15000 }
];

const premiumProducts = products.filter ( item=> item.price>1000);
console.log(premiumProducts);