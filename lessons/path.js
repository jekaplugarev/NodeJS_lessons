const path = require('path')

console.log(path.join(__dirname, 'first', 'second'))
console.log(path.resolve('first', 'second'))

const fullpath = path.join(__dirname, 'first', 'second')
console.log(path.parse(fullpath))

// -----------------------

const siteURL = 'http://localhost:8000/users?id=5124'
const url = new URL(siteURL)
console.log(url)