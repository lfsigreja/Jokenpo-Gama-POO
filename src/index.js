const options = require('./data/index')
const User = require('./controller/class/user')

let usuario = new User({ 
    opt: options
}).game()

console.log(usuario)