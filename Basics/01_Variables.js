// to declare constants in JS use the keyword const
// to declare variables in JS there are two ways, either use let or var
// but using var is not prefered as var has issues regarding block and functional scope
// so to make a variable let is preferred
// JS is a safe language so it will allow you to make a variable even without using let keyword, but never use this

const accountId = 13345
let accountEmail = "mayank@google.com"
var accountPassword = "12345678"
accountCity = "Faridabad"
let accountState

accountEmail = "mayank@meta.com"
accountPassword = "blah1234"
accountCity = "London"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])