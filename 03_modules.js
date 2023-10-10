// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04_names')
const sayHi = require('./05_utils')
const data = require('./06_alternative')
require('./07_alternative2')


sayHi('susan')
sayHi(names.john) //since they are objects access with point
sayHi(names.peter)
sayHi(data.singlePerson.name);

