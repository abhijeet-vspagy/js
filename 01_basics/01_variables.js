const accountId = 144532
let accountEmail = "abhijeet@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState;

// accountId = 2 // const keyword cannot be changed // Not allowed

accountEmail = "hc@hc.com"
accountPassword = "231234"
accountCity = "Delhi"

/*
Prefer not to use "var" because of issue in block and functional scope. Use only let and const
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])