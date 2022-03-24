const takeAChance = require('./take-a-chance');

const myPromise = takeAChance('Dre');
myPromise.then(value => { console.log(value); });
myPromise.catch(error => { console.log(error.message); });
