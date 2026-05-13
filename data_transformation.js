const rawUsers = [
    { id: 1, name: "jose", role: "admin" },
    { id: 2, name: "manuel", role: "user" },
    { id: 3, name: "avalos", role: "guest" }
];

// 1. Creamos una constante para GUARDAR la nueva lista que generará el .map()
// 2. .map() recorre 'rawUsers' uno por uno
const formattedNames = rawUsers.map(rawUsersNew => {
    
    // 3. 'user' representa el objeto actual del ciclo (ej: {id: 1, name: "jose"...})
    
    // 4. USAMOS 'return' para decirle al .map(): 
    // "Toma este valor y ponlo en la nueva posición de la lista 'formattedNames'"
    return rawUsersNew.name.toUpperCase(); 
});

// 5. Al final, 'formattedNames' es una lista nueva: ["JOSE", "MANUEL", "AVALOS"]
console.log(formattedNames);

// Nota: La lista original 'rawUsers' sigue intacta, no cambió.