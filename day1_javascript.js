let nombre = "Manuel";
let ahorro_meta =3000;
let meses=24;

let pago_mensual =  ahorro_meta / meses;

console.log(`${nombre}, el ahorro mensual es de ${pago_mensual}`);


if (pago_mensual < 250) {
    console.log("Tu ahorro mensual es algo bajo, considera apuntar más arriba.");
}


