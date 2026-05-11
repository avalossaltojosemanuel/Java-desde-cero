candidates=["Lionel","Jordan","Santiago","Pedri"];

let requiredSkill="JavaScript";
let hasEnglish= true;

candidates.forEach(element => {
    if (requiredSkill === "JavaScript" && hasEnglish){//no se pone hasEnglish true porque ya esta definida como true(no es necesario)
        console.log(`Candidato ${element} Pasa a entrevista técnica 🚀.`);
    }
    else {
        console.log(`Candidato ${element} No cumple con los requisitos para la entrevista técnica.`);
    }

});