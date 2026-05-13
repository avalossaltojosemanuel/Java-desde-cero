// Creamos el arreglo y lo llenamos con datos de productos
const products = [
    { name: "Mouse", price: 250 },
    { name: "Teclado", price: 500 },
    { name: "Monitor", price: 3500 },
    { name: "Laptop", price: 15000 }
];

// Para unir dos metodos en uno solo, podemos encadenar (chaining) el .filter() y el .map() de la siguiente manera:
const organizedProducts = products.filter( item=> item.price>1000).map( item=> item.name.toUpperCase());
// el callback en este caso es item => puede llamarse como queramos, es solo una variable que representa el elemento actual del ciclo.
// Primero, el .filter() recorre 'products' y devuelve una nueva lista con los productos que cumplen la condición (precio > 1000).
// Luego, el .map() toma esa nueva lista filtrada y crea otra lista con los nombres de esos productos en mayúscula(para eso es el .toUpperCase()) .

console.log("---- LOS PRODUCTOS PREMIUM EXISTENTES SON ----")
console.log (organizedProducts)
