const name = "sinchu"
const repoCount = 12
//console.log(name + repoCount);
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

const gameName = new String('Sin-chu')
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('n'));

const newstring = gameName.substring(0,4)
console.log(newstring);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newstringone = "   sinchu   "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://sinch.com/sinch%20urs"

console.log(url.replace('%20', '-'));
console.log(url.includes('sinch'));
console.log(gameName.split('-'));

