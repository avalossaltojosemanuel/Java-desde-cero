// Creamos una lista y la llenamoscon habilidades
skills=["English","Teamwork","HTML","CSS","JavaScript","Python"];
skills.push("Patient"); // Agregamos una nueva habilidad a la lista

skills.sort();// Ordenamos la lista alfabéticamente

// Recorremos la lista con un ciclo forEach y mostramos cada habilidad
skills.forEach(element => {
    if (element==="JavaScript"){
        console.log(`Skill: ${element} Technical Level: High`);
    }
    else if (element==="Python"){
        console.log(`Skill: ${element} Technical Level: High`);
    }
    else {console.log(`Skill: ${element}`);}
    
}   );

