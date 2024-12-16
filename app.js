const axios = require('axios');
// const operazioni = require('./modules/math') // importo tutto il modulo in un oggetto
const {somma, moltiplicazione} = require('./modules/math') // importo il modulo destrutturandolo
const mioSaluto = require('./modules/saluto') // con l'import singolo posso daro il nome in modo arbitrario
const { log } = require('console');
const giocattoli = require('./data/toys');


log(somma(5,6));
log(moltiplicazione(5,6));
log(mioSaluto('Ugo'));
log(giocattoli)

// console.log(operazioni.somma(5,7));


// axios.get('https://api.sampleapis.com/beers/ale')
//   .then(res => {
//     console.log(res.data);
//   })

