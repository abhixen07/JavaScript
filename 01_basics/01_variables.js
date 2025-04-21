const accountId = 12345
let accountEmail = "anab@gmail.com"
var accountPassword = "123456"
//not recommended but if not give type then it will be let
accountCity = "Gujrat"
let accountState;
//undefined if no value is assigned

// not work
// accountId = 2

accountEmail = "anabd@gmail.com"
accountPassword = "2816"
accountCity = "Pahrianwali"

console.log(accountId);

/*
Prefer not to use var
because of issue in bloack scope and functional scope
*/
// print all variables in table
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])