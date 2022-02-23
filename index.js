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


const matkad = [
  matk1, 
  matk2,
  {
    id: 3,
    nimetus: "Matk  mägedes",
    kirjeldus: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore minima, nemo tempora rem corrupti sequi architecto eius fuga magnam temporibus dolor quam et, omnis illum officia fugit voluptatum perspiciatis! Est.",
    pildiUrl: "./assets/uudis2.jpg",
    osalejad: []  
  }
]


const uudis1 = {
  id: "1",
  nimetus: 'Juhend, kuidas matkata maroko kõrvetavat kõrbes',
  kommentaarid: '(12)',
  kirjeldus: 'Maroko pakub suhteliselt lihtsat juurdepääsu suurepärasele Sahara kõrbele, mis on suurim kuum kõrb maa peal. Maroko külastades on tohutu luited, näiliselt lõputud liivarandused, ettearvamatu kliima, vahuveinid oaasid ja vastupidav taimestik, ebasoodsam ja äärmuslik ala on seikluste otsijatele mõeldud magnetit.',
  pildiUrl: "./assets/uudis1.jpg",
  kommentaarid: '(12)',
  
}
const uudis2 = {
  id: "2",
  nimetus: 'Konservipurgiga mõmmide keskel  ',
 
  kirjeldus: 'Automatk Ameerika Ühendriikides kuulub paljude inimeste reisiunistuste nimekirja. Mööda laia maanteed kulgemine on üheaegselt põnev ja lõõgastav. Põnev eelkõige seetõttu, et USA on tohutult suur ja sellele suurele maalapile mahub palju vingeid kohti. Vaid paaritunnise autosõiduga võib vahetada ranna lumise mäetipu või kõrbe lopsaka metsa vastu.',
  pildiUrl: "./assets/uudis2.jpg",
  kommentaarid: '(22)',
  
}
const uudis3 = {
  id: "3",
  nimetus: 'Matkavarustuse valimise ABC',
 
  kirjeldus: 'Matkavarustuse soetamist tasub alustada jalanõudest. Eesti tingimustes on parim pehme tallaga jalats, et oleks hea liikuda. Jäiga tallaga jalanõud on mõeldud kivistesse Alpidesse tehniliseks ronimiseks. Jalanõu peab eelkõige olema mugav. Kas see riietega kokku sobib, pole kogenud matkaja kinnitusel oluline.',
 pildiUrl: "./assets/uudis3.jpg",
 kommentaarid: '(3)',
}
const uudis4 = {
  id: "4",
  nimetus: 'Ellujäämisnipid talvel telkimiseks',
  
  kirjeldus: 'Põhja-Rootsis kelgukoerte giidina ja 2019. aastal 300-kilomeetrise Fjällräven Polar polaarmatka kelgukoertega läbinud Maiu Lünekund jagab hüva nõu, kuidas öö telgis keset paksu ja lumist metsa turvaliselt mööda saata. 1) Ära higista, ära saa märjaks „Don’t sweat, don’t get wet – ära higista, ära saa ',
  pildiUrl: "./assets/uudis4.jpg",
  kommentaarid: '(11)',
}
const uudis5 = {
  id: "5",
  nimetus: 'Lahtise tulega tuleb olla ettevaatlik',
  
  kirjeldus: 'Näiteks põhjustab kodus sageli tulekahju grillimine või lõkke tegemine. Seetõttu on nende tegevuste juures oluline järgida ohutusreegleid nii eramajas kui ka kortermajas. Vaata ohutu grillimise ja lõkke tegemise juhendit SIIT',
  pildiUrl: "./assets/uudis5.jpg",
  kommentaarid: '(8)',
}
const uudis6 = {
  id: "6",
  nimetus: 'Kui need seinad räägiksid',

  kirjeldus: 'Järvamaa on igas mõttes rikas paik: siin on peaaegu kõike. On ka üks riigimetsa majandamise keskuse metsamaja (Vanapagana) ja üks matkaonn (Saeveski). Kuidas neis elu käib? Neid majakesi otsides peab rännukihk matkaselli viima Lõuna-Järvamaale Türi valda Rassi küla metsapadrikusse. ',
  pildiUrl: "./assets/uudis6.jpg",
  kommentaarid: '(5)',
}
const uudised = [uudis1, uudis2, uudis3, uudis4, uudis5, uudis6 ]

function naitaRegistreerimist(req, res) {
  const index = parseInt(req.params.matk)
  console.log("valitud matk " + index)
  console.log(matkad[index])
  res.render('pages/registreerumine', {matk: matkad[index]})
}



  express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {matkad: matkad}))
  .get('/uudised', (req, res) => res.render('pages/uudised' , {uudised: uudised}))
  .get('/kontakt', (req, res) => res.render('pages/kontakt'))
  .get('/registreerumine', (req, res) => res.render('pages/registreerumine'))
  .get('/registreerumine/:matk', naitaRegistreerimist)

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))