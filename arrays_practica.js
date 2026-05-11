// Creamos la lista
companies = ["FIFA", "Google","PORSCHE", "Apple"] 
companies.push("META"); // Agregamos un nuevo elemento a la lista

console.log("La primera en mi lista de deseos es:"+companies[0]);

companies.sort(); // Ordenamos la lista alfabéticamente
console.log(`Ahora tengo ${companies.length} empresas en mi lista de deseos`); // Imprimimos el número de elementos en la lista

// Imprimimos el primer elemento de la lista de nuevo para verificar que se ha ordenado correctamente
console.log(companies[0]);