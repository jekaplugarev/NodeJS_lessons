const fs = require('fs')
const path = require('path')

// console.log('Start')
//
// fs.mkdirSync(path.resolve(__dirname, 'dir'))
// fs.mkdir(path.resolve(__dirname, 'dir2'), (err) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log('Папка создана')
// })
//
// console.log('End')

// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'Hello', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Файл записан')
//
//     fs.appendFile(path.resolve(__dirname, 'text.txt'), 'END', (err) => {
//         if (err) {
//             throw err
//         }
//         console.log('Файл записан')
//     })
// })

const writeFileAsync = async (path, data) => {
    return new Promise((res, rej) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                return rej(err.message)
            }
            res()
        })
    })
}

const appendFileAsync = async (path, data) => {
    return new Promise((res, rej) => {
        fs.appendFile(path, data, (err) => {
            if (err) {
                return rej(err.message)
            }
            res()
        })
    })
}

const readFileAsync = async (path) => {
    return new Promise((res, rej) => {
        fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
            if (err) {
                return rej(err.message)
            }
            res(data)
        })
    })
}

writeFileAsync(path.resolve(__dirname, 'text.txt'), 'Hello')
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), 'End'))
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(data => console.log(data))
    .catch(err => console.log(err))
