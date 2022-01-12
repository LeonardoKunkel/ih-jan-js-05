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

// C. PROPIEDADES Y CICLOS

// OBJECT.KEYS()
// Método que permite convertir las propiedades de un objeto en elementos de un arreglo.

const arrRefresco = Object.keys(refresco);

console.log(arrRefresco);


// OBJECT.VALUES()
// Método que permite convertir los valores de un objeto en elementos de un arreglo.
const arrRefrescoValores = Object.values(refresco);

console.log("arrRefrescoValores", arrRefrescoValores);

// CICLO for ... in
for( let key in refresco ) {
    // console.log(`La propiedad es: ${key}`);
    // if( key === "envase" ) console.log("Encontré la prop competidor");
    console.log(`La propiedad es ${key} y su valor es ${refresco[key]}`);
}


// ARREGLOS CON OBJETOS
const mike = [
    {
        name: "Mike",
        edad: 34
    }
]

console.log(mike[0].edad);

let estudiantesIH = [
    {
        name: "Leo",
        location: "Querétaro",
        weather: "Frijolito"
    },
    {
        name: "Joaquín",
        location: "Hidalgo",
        weather: "Frijolito duro"
    },
    {
        name: "Alan",
        location: "Atizapán",
        weather: "Frijolito suave"
    },
    {
        name: "Alexis",
        location: "Aguascalientes",
        weather: "Frijolito suave"
    }
]

console.log(estudiantesIH[2].location);

// JS TRADICIONAL - ES5
estudiantesIH.push({
    name: "Emmanuel",
    location: "CDMX",
    weather: "Calorcito"
});

console.log(estudiantesIH);

// JS MODERNO - ES6
estudiantesIH = [
    ...estudiantesIH,
    {
        name: "Román",
        location: "CDMX",
        weather: "Calorcito"
    }
];

console.log(estudiantesIH);

let arrHalo = [
    {
        name: "John",
        species: "Human",
        kills: 87634876587923465,
        alias: [
            "Master chief",
            "Demon",
            "Sierra 117"
        ]
    },
    {
        name: "Thel 'Vadam",
        species: "Sangheili",
        kills: 765785,
        alias: [
            "Arbiter",
            "split face"
        ]
    },
    {
        name: "Miranda Keyes",
        species: "Human",
        kills: 3,
        alias: "Keyes"
    },
    {
        name: "Tartarus",
        species: "Monkeys?",
        kills: 666,
        alias: "Space ape"
    }
]

console.log(arrHalo[0].alias[1]);
console.log(arrHalo[1].alias[0]);
console.log(arrHalo[2].species);
console.log(arrHalo[3].alias);
