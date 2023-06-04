const fs = require('fs');

const register = (nombre, edad, animal, color, enfermedad) => {
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  citas.push({
    nombre,
    edad,
    animal,
    color,
    enfermedad
  });

  fs.writeFileSync('citas.json', JSON.stringify(citas));

};

const read = () => {
 const data = fs.readFileSync('citas.json', 'utf8');
 if(data === '[]') {
    console.log('No hay citas');
 }
 else {
     const citas = JSON.parse(data);
     console.log(citas);
  }
};

module.exports = { register, read };