import express from 'express'
const app = express()
const port = 3000
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import bodyParser from 'body-parser'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:true}));

let userDate;

app.get('/', (req, res) => {
    res.sendFile(__dirname, 'public', 'index.html')
})

app.post('/date', (req, res) => {
    res.render('index.ejs', {
        userDate: req.body.date
    })
})

app.listen(port, () => {
    console.log(`port is running on ${port}`)
})