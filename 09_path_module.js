const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)
console.log('-----------------------------------------------')
const base = path.basename(filePath)
console.log(base)
console.log('-----------------------------------------------')
console.log(__dirname)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)