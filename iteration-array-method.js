const {clear} = require('console');
//const fetch = require('node-fetch');
const personData = require('./sample-data.json');

//console.log(personData);
personData.forEach(element => {
    console.log(element.name);
});

for (x in personData.age){
    console.log(x);
}