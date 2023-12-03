const express = require('express')
const app = express()
const port = 3000

// rota de inicio do site
app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html')
})

// rota de produtos do site
app.get('/produtos', (req, res) => {
    res.sendFile(__dirname +'/produtos.html')
  })

// rota de sobre
app.get('/sobre', (req, res) => {
    res.sendFile(__dirname +'/sobre.html')
  })
  
// rota de cadastro do site
app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname +'/cadastro.html')
  })
  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})