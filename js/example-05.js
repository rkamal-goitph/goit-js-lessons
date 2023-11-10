// Example 5 - Template lines
// Compose a phrase using the template strings A has B bots in stock, where A, B - variables inserted into a line.

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${Math.pow((repairBots + defenceBots), 2)} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
