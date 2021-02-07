const {clear} = require('console');
const { Z_FILTERED } = require('zlib');
//const fetch = require('node-fetch');
const personData = require('./sample-data.json');

console.log("\n<------------------------------------------------------->");
console.log("Printing out all of the data using iteration methods");

console.log("\nfor:");
for (let i = 0; i < personData.length; i++){
    console.log(personData[i]);
}

console.log("\nfor in:");
for (const i in personData){
    console.log(personData[i]);
}

console.log("\nfor of:");
for(const i of personData){
    console.log(i);
}

console.log("\nfor each:");
personData.forEach(i => {
    console.log(i);
});

console.log("\nwhile:");
let i = 0;
while (i < personData.length){
    console.log(personData[i]);
    i++;
}

console.log("\n<------------------------------------------------------->");
console.log("Printing out a portion of the data using array methods");

console.log("\nfilter:");
    console.log(personData.filter (i => i.city === "Malasiqui"));

console.log("\nmap:");
    console.log(personData.map(i => `${i.name}  ${i.age}` ));

console.log("\nreduce");
    console.log(personData.reduce((accumulator, currentValue) => accumulator.age + currentValue.age));

console.log("\n<------------------------------------->\n");