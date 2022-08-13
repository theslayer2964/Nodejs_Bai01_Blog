const express = require('express')
// lây thư vịn express lưu về node-module
const app = express() // trả về 1 instance
const port = 3000
// define Route
app.get('/', (req, res) =>  {
    var a = 1
    var b = 2
    var c = a + b
    return res.send('Hello World')
} )

// localhost -> 127.0.0.1
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))