const app = require('./server')
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`> React Music App Backend up at http://localhost:${port} !`))