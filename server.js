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

// version avec Express Framework
const express = require('express')

const app = express()

// ajout d'une route /
app.get('/', (req, res) => {
  res.send('Page Accueil')
})

// ajout d'une route vers appareils/
app.get('/appareils', (req, res) => {
  res.send('<h1>Page des appareils</h1>')
})

// ajout d'une route vers appareils/
app.get('/contact', (req, res) => {
  res.send('<h1 style="color:red;">Page Contact</h1>')
})

// lancer le server sur le port 3000
app.listen(3000, () => {
  console.log('server is running...............')
})