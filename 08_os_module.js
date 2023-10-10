//os is a built-in module
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)
console.log(`The System Uptime is ${os.uptime() / 60} hours`)
console.log(`The System Uptime is ${os.uptime() / 1440} days`)
console.log(`The System Uptime is ${os.uptime() / 1440} days`)
console.log(`The System Uptime is ${os.uptime() / 43200} months`)
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
