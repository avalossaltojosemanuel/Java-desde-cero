// Sistema de Nómina para Empleados
// Crear un array de objetos que representen a los empleados de una empresa, 
// con propiedades como nombre, salario base y habilidades. 
// Luego, escribir una función que calcule el salario final de cada empleado 
// aplicando un bono si tienen más de 2 habilidades, y devuelva un mensaje con el nombre del empleado y su salario final.
const employees=[
    {name: "Jose", baseSalary: 1000, skills:["JavaScript","HTML","CSS"]},
    {name: "Pedri", baseSalary: 1200, skills:["Python","Django"]},
    {name: "Fer", baseSalary: 1100, skills:["Java","Spring"]}
];

employees.forEach(employee => {
    let finalSalary=employee.baseSalary;
    if (employee.skills.length>2){
        finalSalary+=500;
        console.log(`Empleado ${employee.name} | Sueldo final :${finalSalary} USD. (Bono Aplicado ✅)`);
    }
    else{
        console.log(`Empleado ${employee.name} | Sueldo final :${finalSalary} USD.`)
    }
    });