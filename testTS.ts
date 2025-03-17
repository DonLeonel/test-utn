interface persona {
    nombre: string;
    apellido: string;
    edad: number;
    direccion?: string;
}

const testFunc = (persona: persona) => {
    if (persona.direccion) {
        console.log(`Hola, mi nombre es ${persona.nombre} ${persona.apellido} tengo ${persona.edad} años y vivo en ${persona.direccion}`);
    } else {
        console.log(`Hola, mi nombre es ${persona.nombre} ${persona.apellido} tengo ${persona.edad} años`);
    }
}

testFunc({ nombre: "Juan", apellido: "Perez", edad: 20, direccion: "Calle 123" });
testFunc({ nombre: "Juan", apellido: "Perez", edad: 20 });