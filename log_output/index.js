const crypto = require('crypto');

// 1. Genera una cadena aleatoria al inicio y la guarda en memoria
const randomString = crypto.randomUUID();
console.log(`Aplicación iniciada. String aleatorio: ${randomString}`);

// 2. Imprime el timestamp actual y el string cada 5 segundos
setInterval(() => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
}, 5000);