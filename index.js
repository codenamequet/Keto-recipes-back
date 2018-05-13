const express = require('express')

const recipes = require('./config/recipes.js')

const app = express()
const parser = require('body-parser')
const methodOverride = require('method-override')
const port = process.env.PORT || 4000


app.use(parser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/assets', express.static('public'))

app.use('/recipes', recipes)

app.get('/', (req, res) => {
    res.render('./welcome')
})

app.post("/", (req, res) => {
    res.json(req.body)
})

app.set('port', process.env.PORT || 4000)

app.listen(port, () => {
    console.log('It\'s Lit 🔥🔥🔥')
})
