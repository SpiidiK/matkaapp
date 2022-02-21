const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const matk1 = {
  id: 0,
  nimetus: "Matk kõrbes",
  kirjeldus: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ipsa sed quod reprehenderit ipsum veritatis accusamus nesciunt nisi saepe deserunt quaerat, sunt alias, voluptates illum aspernatur! Facilis qui sunt cum!",
  pildiUrl: "./assets/uudis1.jpg",
  osalejad: ['mati@matkaja.ee', 'kati@matkajad.ee']
}
const matk2 = {
  id: 1,
  nimetus: "Matk Piusas",
  kirjeldus: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ipsa sed quod reprehenderit ipsum veritatis accusamus nesciunt nisi saepe deserunt quaerat, sunt alias, voluptates illum aspernatur! Facilis qui sunt cum!",
  pildiUrl: "./assets/piusa.jpg",
  osalejad: ['klaabu@suurmeri.ee' ]
}
const matk3 = {
  id: 2,
  nimetus: "Matk mägedes",
  kirjeldus: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ipsa sed quod reprehenderit ipsum veritatis accusamus nesciunt nisi saepe deserunt quaerat, sunt alias, voluptates illum aspernatur! Facilis qui sunt cum!",
  pildiUrl: "./assets/Uudis2.jpg",
  osalejad: []
}

const matkad = [matk1, matk2, matk3]

function naitaRegistreerimist(req, res){
  const index = parseInt(req.params.matk)
  console.log("valitud matk" + index)
  console.log(matkad[index])
  res.render('pages/registreerumine', {matk: matkad[index]})
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {matkad}))
  .get('/kontakt', (req, res) => res.render('pages/kontakt'))
  .get('/uudised', (req, res) => res.render('pages/uudised'))
  
  .get('/registreerumine/:matk', naitaRegistreerimist)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
