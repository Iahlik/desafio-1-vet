const { register, read } = require('./operaciones')

const [orden, nombre, edad, animal, color, enfermedad] = process.argv.slice(2)

if (orden === 'register') {
    register(nombre, edad, animal, color, enfermedad)
}
else if (orden === 'read') {
    read()
}
else {
    console.log('operación no soportada...');
}