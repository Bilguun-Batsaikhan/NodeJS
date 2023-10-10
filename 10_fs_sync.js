const { readFileSync, writeFileSync } = require('fs')

console.log('start')

//reading a file to first and second
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)
//writing to a file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' } //stands for append
)
console.log('done with this task')
console.log('starting the next one')