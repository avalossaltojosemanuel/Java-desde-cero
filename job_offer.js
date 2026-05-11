let companyName="La Mejor Empresa S.A.";
let salaryUSD=3500;
const exchangeRate=18.50;

// Calculando el salario en MXN
let salaryMXN= salaryUSD * exchangeRate;

// Comparando la oferta salarial con el mercado laboral
if (salaryMXN >50000){
    console.log(`¡Felicidades, ${companyName} te ofrece una Gran oferta!` )
}
else if (salaryMXN > 30000){
    console.log(`${companyName} tiene una oferta decente, buena para empezar.`);
}
else {
    console.log(`${companyName} tiene una oferta muy baja, mejor emprendamos una Taqueria.`);
}


// Calculando el ahorro mensual si ahorras el 15% de tu salario
console.log(`Si ahorras el 15% de tu salario te quedarian ${salaryMXN*0.15} pesos mensuales.`);