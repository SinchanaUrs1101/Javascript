const accountId = 14453 
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState
//dont use var as it has issues with blocks cope and functional scope
//accountId = 2
accountEmail = "surs@gg.com"
accountPassword = "1101"
accountCity = "Pune"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])