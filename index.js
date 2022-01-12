// OBJETOS
// NO PRIMITIVOS
// ESTÁN COMPUESTOS POR PROPIEDADES Y VALORES

const mexico = {
    comida: "Tacos" // Propiedad "comida" y valor "Tacos"
}
console.log(mexico);
// A. ACCEDER A LAS PROPIEDADES
// DOT NOTATION - NOTACIÓN DE PUNTO
console.log(mexico.comida);

// BRACKET NOTATION - NOTACIÓN POR CORCHETES
console.log(mexico["comida"]);

const olympicRecords = {
    athletics100Men: "Justin",
    athleticsLongJumpMen: "Mike",
    swinning200Men: "Phelps",
    "swimming 200 Women": "Ariarne Titmus"
}

console.log(olympicRecords.athletics100Men);
console.log(olympicRecords["athletics100Men"]);

console.log(olympicRecords["swimming 200 Women"]);


// B. AGREGAR PROPIEDADES
const refresco = {
    nombre: "Coca-Cola",
    color: "Oscuro",
    precio: 12,
    tamanos: [600, 1000]
}

refresco.envase = "Plástico"

console.log("Objeto de refresco: ", refresco);

refresco["competidor"] = "Pepsi"

console.log(refresco);
