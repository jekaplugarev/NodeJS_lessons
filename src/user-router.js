const Router = require('../framework/Router')

const router = new Router()

const users = [
    {id: 1, name: 'Jeka'},
    {id: 2, name: 'Kate'},
]

router.get('/users', (req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    res.end(JSON.stringify(users))
})

module.exports = router