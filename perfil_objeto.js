// Crear un objeto que represente el perfil de una persona, 
// con propiedades como nombre, edad, habilidades, etc. 
// Luego, escribir una función que evalúe si el perfil cumple con ciertos criterios 
// (por ejemplo, si la persona tiene habilidades en JavaScript y es mayor de 18 años) 
// y devuelva un mensaje indicando si el perfil es válido o no.
const myProfile ={
    name: "Jose Manuel",
    age: 20,
    isStudent: true,
    skills:["JavaScript","HTML","CSS"]
}

console.log(`Hola, mi nombre es ${myProfile.name}`)

if(myProfile.skills.includes("JavaScript") && myProfile.age >=18){
    console.log(`El perfil de ${myProfile.name} es valido, Nivel: Junior Developer`)
}
else {
    console.log(`Sigue practicando ${myProfile.name}`)
}