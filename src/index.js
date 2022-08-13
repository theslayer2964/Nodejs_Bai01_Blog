const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
// lây thư vịn express lưu về node-module
const app = express() // trả về 1 instance
const port = 3000
app.use(morgan('combined')) // http logger
// template engine. extname: config đui file -> 
app.engine('hbs', handlebars.engine({extname:'hbs'}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname, 'resources','views'))
// define Route
app.get('/', (req, res) =>  { // browser quá giỏi để bít mày trả ko đủ cái html->tự vít lại lun
    // res.send(`<h1>Hello World!!!</h1>`)
    return res.render('home') 
} )
app.get('/news', (req, res) => {
    return res.render('news')
})

// localhost -> 127.0.0.1
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))