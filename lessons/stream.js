const fs = require('fs')
const path = require('path')

const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'))

stream.on('data', (chunk) => {
    console.log(chunk)
})

const writebleStream = fs.createWriteStream(path.resolve(__dirname, 'text.txt'))

for (let i = 0; i < 10; i++) {
    writebleStream.write(i + '\n')
}
writebleStream.end()