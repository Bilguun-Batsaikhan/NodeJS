/*Exercise 1: Callback to Promise
* Write a function sumAsync that takes two numbers and a callback function as parameters. The function should compute the sum of the two numbers and pass the result to the callback function.*/

function sumAsync(a, b, callback) {
    callback(a + b);
}
sumAsync(1, 2, (sum) => {
    console.log('The sum of two numbers are: ' + sum)})

function sumPromise(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a + b)
    })
}
sumPromise(1, 2).then((sum) => {
    console.log('The sum of two numbers are: ' + sum)
})
/*Exercise 2: Chaining Promises
Write a function getUser that takes a user ID and a callback function as parameters. The function should simulate fetching user data from a database and pass the user object to the callback function.
 */
const users = [{ID: 1, Name: 'Billy'}, {ID: 2, Name: 'Sakura'}, {ID: 3, Name: 'Hinata'}]
const getUser = (UserID, callback) => {
    const user = {
        ID: UserID,
        Name: 'Unknown'
    }
    callback(user)
}
getUser(2, (user) => {
    let userName = 'Not found';
    for(let i = 0; i < users.length; i++) {
        if(users[i].ID === user.ID) {
            userName = users[i].Name;
            break;
        }
    }
    console.log(`User with ID ${user.ID} ${userName}`)
})

let getUserPromise = (ID) => {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < users.length; i++) {
            if(users[i].ID === ID) {
                resolve(users[i].Name)
                break;
            }
        }
        reject('User not found')
    })
}

getUserPromise(2).then((user) => {
    console.log(`The user I'm looking for is ${user}`)
}).catch((notFound) => {
    console.log(`Not found`)
})