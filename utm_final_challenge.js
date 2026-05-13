//Creacion de un array de objetos para representar los proyectos
projects = [
    { id: 1, title: "Sistema Gestion de Tareas", baseBudget: 1500, status: "pending", tags : "PHP" },
    { id: 2, title: "E-commerce para Ropa", baseBudget: 3000, status: "in progress", tags : "JavaScript" },
    { id: 3, title: "App de Recetas", baseBudget: 2000, status: "completed", tags : "Python" },
    { id: 4, title: "Red Social para Viajeros", baseBudget: 4000, status: "pending", tags : "Ruby" }
];


// Filtrar los proyectos completados, calcular el presupuesto total con un aumento del 16% y formatear la salida  
const formattedProjects =  projects.filter(project => project.status === "completed").map(project => {
    let totalBudget = project.baseBudget * 1.16; // Aplicar un aumento del 16% al presupuesto base
    return{
        title: project.title,       // "Propiedad: Valor"
         totalBudget: totalBudget.toFixed(2) // Redondear a 2 decimales
    }
})

// Imprimir los proyectos formateados con el presupuesto total
 formattedProjects.forEach(project => {
    if(Number(project.totalBudget) > 3000){
        console.log(`Proyecto: ${project.title} | Presupuesto Alto.💰`);
    }
    else{
        console.log(`Proyecto: ${project.title} | Presupuesto con IVA: ${project.totalBudget} USD.`);
    }
     })