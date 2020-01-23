const express = require('express')
const cors = require('cors')
const app = express()
const port = 2992

let news = []

app.use(cors())

app.get('/', (req, res) => res.json(news))
app.post('/', express.json(), (req, res) => {
    news.push(
        {
            title: req.body.title,
            text: req.body.text
        }
    )
    res.send("News Added!");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))