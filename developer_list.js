// Dado un array de objetos con la información de los desarrolladores,
const developers = [
    { name: "Jose", age: 20, skills: ["JavaScript"] },
    { name: "Luis", age: 17, skills: ["JavaScript"] },
    { name: "Fer", age: 25, skills: ["Python"] }
];


//  filtrar aquellos que tengan habilidades en JavaScript y sean mayores de 18 años.
developers.forEach(element => {
    if (element.skills.includes("JavaScript") && element.age >= 18) {
        console.log(`Candidato ${element.name} aceptado ✅`);
    }
    else{
        if(element.age<18){
            console.log(`Candidato ${element.name}: Rechazado ❌ (Menor de edad)`)
        }
        else if(!element.skills.includes("JavaScript")){
            console.log(`Candidato ${element.name}: Rechazado ❌ (Falta JavaScript)`)
        }
    }
});

