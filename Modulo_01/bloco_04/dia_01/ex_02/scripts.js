let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge); //retorna o tipo undefined, pois a variavel ñ foi declarada.

//calcular a área e o perimetro de um retangulo
const base = 5;
let height = 8;
const area = base * height;
console.log(area);
const perimeter = base * 2 + height * 2; //soma de todos os lados do retangulo
console.log(perimeter);