const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const urlParser = require('./framework/parseUrl')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const app = new Application()

app.use(jsonParser)
app.use(urlParser('http://localhost:5000'))

app.addRouter(userRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://JekaPl:JekaPl1968@cluster0.i1sxz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

start()