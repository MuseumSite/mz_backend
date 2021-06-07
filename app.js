const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require("cors");

const app = express()

app.use(express.json({extended: true}))

app.use('/static', express.static('static'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/news', require('./routes/news.routes'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(5000, () => console.log(`App has been started on port ${PORT}`))
    } catch (e) {
        console.log("Server Error", e.message)
        process.exit()
    }
}

start()

