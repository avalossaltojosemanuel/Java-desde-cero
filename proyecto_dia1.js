//Declaracion variables y constantes
const TAX_RATE = 0.16;
let bonusAmount = 500;
let devNames = ["Jose", "Manuel", "Messi"];

devNames.forEach(element => {
    let grossSalary = 2500; 
    let netSalary = grossSalary * (1 - TAX_RATE); 
    let techStack = "JavaScript";
    let hasBonus = false; // Variable auxiliar para el mensaje

    if (techStack === "JavaScript" || techStack === "Python") {
        netSalary += bonusAmount;
        hasBonus = true;
    }

    // Imprimimos el resultado para todos
    console.log(`Developer: ${element} | Net Salary: $${netSalary} USD`);
    
    if (hasBonus) {
        console.log(` 🌟 Bonus applied for ${techStack} proficiency!`);
    }
});