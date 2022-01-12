const os = require('os')
const cluster = require('cluster')

console.log(os.platform())
console.log(os.arch())
console.log(os.cpus().length)

if (cluster.isPrimary) {
    for (let i = 0; i < os.cpus.length - 2; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker) => {
        console.log(`Worker with pid - ${process.pid} is DEAD`)
        cluster.fork()
    })
} else {
    console.log(`id - ${process.pid}`)

    setInterval(() => {
        console.log(`Worker with pid - ${process.pid} is work`)
    }, 5000)
}

