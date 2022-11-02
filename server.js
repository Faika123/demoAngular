// version avec Express Framework
const express = require("express")
const path = require("path")

const routeAppareil = require('./backend/routes/appareils.route')

const app = express()

// pour formater les données post en format json
app.use(express.json())

app.use('/appareilsAPI', routeAppareil)

// chargement d'un site web static
app.use(express.static(path.join(__dirname, "backend/www")))

// lancer le server sur le port 3000
app.listen(3000, () => {
  console.log("server is running on port 3000...")
});

//-------
// version avec nodejs
/*
const http = require('http')

const server = http.createServer((req, res) => {
  res.write('<h1>Un premier Bonjour </h1>')
  res.end('<p>Bonjour Master !</p>')
})

server.listen(3000, '127.0.0.1', () => {
  console.log('server is running...............')
})
*/
