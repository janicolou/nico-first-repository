const personData = require("./sample-data.json");

objMethods = {
  getFor: function () {
    console.log("\nfor:");
    for (let i = 0; i < personData.length; i++) console.log(personData[i]);
  },
  getForIn: function () {
    console.log("\nfor in:");
    for (const i in personData) console.log(personData[i]);
  },
  getForOf: function () {
    console.log("\nfor of:");
    for (const i of personData) console.log(i);
  },
  getForEach: function () {
    console.log("\nfor each:");
    personData.forEach((i) => console.log(i));
  },
  getWhile: function () {
    console.log("\nwhile:");
    let i = 0;
    while (i < personData.length) {
      console.log(personData[i]);
      i++;
    }
  },
  getFilter: function () {
    console.log("\nfilter:");
    console.log(personData.filter((i) => i.city === "Malasiqui"));
  },
  getNmap: function () {
    console.log("\nmap:");
    console.log(personData.map((i) => `${i.name}  ${i.age}`));
  },
  getReduce: function () {
    console.log("\nreduce:");
    console.log(
      personData
        .map((i) => parseInt(`${i.age}`))
        .reduce((accumulator, currentValue) => accumulator + currentValue)
    );
  },
};

objMethods.getReduce();
