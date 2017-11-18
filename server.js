const Server = require('./src/server.js')
const port = (process.env.PORT || 8080)
const app = Server.app()

// Sets server
app.listen(port)
console.log(`Listening on:${port}`)
