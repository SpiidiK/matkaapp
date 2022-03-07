const express = require('express')
const { MongoClient } = require('mongodb')
const path = require('path')
const { runInNewContext } = require('vm')
const PORT = process.env.PORT || 5000


const salasona = "Turvalineparool1"
const andmebaas = "matkaApp"
const mongoUrl = `mongodb+srv://matka-app:${salasona}@cluster0.lcsoy.mongodb.net/${andmebaas}?retryWrites=true&w=majority`

const client = new MongoClient(mongoUrl)

const matk1 = {
  id: 0,
  nimetus: "Matk kõrbes",
  kirjeldus: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ipsa sed quod reprehenderit ipsum veritatis accusamus nesciunt nisi saepe deserunt quaerat, sunt alias, voluptates illum aspernatur! Facilis qui sunt cum!",
  pildiUrl: "/assets/uudis1.jpg",
  osalejad: []
}
const matk2 = {
  id: 1,
  nimetus: "Matk Piusas",
  kirjeldus: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ipsa sed quod reprehenderit ipsum veritatis accusamus nesciunt nisi saepe deserunt quaerat, sunt alias, voluptates illum aspernatur! Facilis qui sunt cum!",
  pildiUrl: "/assets/piusa.jpg",
  osalejad: [ ]
}


const matkad = [
  matk1, 
  matk2,
  {
    id: 2,
    nimetus: "Matk  mägedes",
    kirjeldus: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore minima, nemo tempora rem corrupti sequi architecto eius fuga magnam temporibus dolor quam et, omnis illum officia fugit voluptatum perspiciatis! Est.",
    pildiUrl: "/assets/uudis2.jpg",
    osalejad: []  
  }
]


const uudis1 = {
  id: "0",
  nimetus: 'Juhend, kuidas matkata maroko kõrvetavat kõrbes',
  kommentaarid: '(12)',
  kirjeldus: 'Maroko pakub suhteliselt lihtsat juurdepääsu suurepärasele Sahara kõrbele, mis on suurim kuum kõrb maa peal. Maroko külastades on tohutu luited, näiliselt lõputud liivarandused, ettearvamatu kliima, vahuveinid oaasid ja vastupidav taimestik, ebasoodsam ja äärmuslik ala on seikluste otsijatele mõeldud magnetit.',
  pildiUrl: "/assets/uudis1.jpg",
  kommentaarid: '(12)',
  sisu: ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
  
}
const uudis2 = {
  id: "1",
  nimetus: 'Konservipurgiga mõmmide keskel  ',
  kirjeldus: 'Automatk Ameerika Ühendriikides kuulub paljude inimeste reisiunistuste nimekirja. Mööda laia maanteed kulgemine on üheaegselt põnev ja lõõgastav. Põnev eelkõige seetõttu, et USA on tohutult suur ja sellele suurele maalapile mahub palju vingeid kohti. Vaid paaritunnise autosõiduga võib vahetada ranna lumise mäetipu või kõrbe lopsaka metsa vastu.',
  pildiUrl: "/assets/uudis2.jpg",
  kommentaarid: '(22)',
  sisu: ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
  
}
const uudis3 = {
  id: "2",
  nimetus: 'Matkavarustuse valimise ABC',
 
  kirjeldus: 'Matkavarustuse soetamist tasub alustada jalanõudest. Eesti tingimustes on parim pehme tallaga jalats, et oleks hea liikuda. Jäiga tallaga jalanõud on mõeldud kivistesse Alpidesse tehniliseks ronimiseks. Jalanõu peab eelkõige olema mugav. Kas see riietega kokku sobib, pole kogenud matkaja kinnitusel oluline.',
 pildiUrl: "/assets/uudis3.jpg",
 kommentaarid: '(3)',
 sisu: ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
}
const uudis4 = {
  id: "3",
  nimetus: 'Ellujäämisnipid talvel telkimiseks',
  kirjeldus: 'Põhja-Rootsis kelgukoerte giidina ja 2019. aastal 300-kilomeetrise Fjällräven Polar polaarmatka kelgukoertega läbinud Maiu Lünekund jagab hüva nõu, kuidas öö telgis keset paksu ja lumist metsa turvaliselt mööda saata. 1) Ära higista, ära saa märjaks „Don’t sweat, don’t get wet – ära higista, ära saa ',
  pildiUrl: "/assets/uudis4.jpg",
  kommentaarid: '(11)',
  sisu: ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
}
const uudis5 = {
  id: "4",
  nimetus: 'Lahtise tulega tuleb olla ettevaatlik',
  kirjeldus: 'Näiteks põhjustab kodus sageli tulekahju grillimine või lõkke tegemine. Seetõttu on nende tegevuste juures oluline järgida ohutusreegleid nii eramajas kui ka kortermajas. Vaata ohutu grillimise ja lõkke tegemise juhendit SIIT',
  pildiUrl: "/assets/uudis5.jpg",
  kommentaarid: '(8)',
  sisu: ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
}
const uudis6 = {
  id: "5",
  nimetus: 'Kui need seinad räägiksid',
  kirjeldus: 'Järvamaa on igas mõttes rikas paik: siin on peaaegu kõike. On ka üks riigimetsa majandamise keskuse metsamaja (Vanapagana) ja üks matkaonn (Saeveski). Kuidas neis elu käib? Neid majakesi otsides peab rännukihk matkaselli viima Lõuna-Järvamaale Türi valda Rassi küla metsapadrikusse. ',
  pildiUrl: "./assets/uudis6.jpg",
  kommentaarid: '(5)',
  sisu: ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
}
const uudised = [uudis1, uudis2, uudis3, uudis4, uudis5, uudis6 ]

let matkajad = []

function naitaUudist(req, res) {
  const index = parseInt(req.params.uudis)
  console.log("valitud uudis " + index)
  console.log(uudised[index])
  res.render('pages/uudis', {uudis: uudised[index]})
}

function naitaRegistreerimist(req, res) {
  const index = parseInt(req.params.matk)
  console.log("valitud matk " + index)
  console.log(matkad[index])
  res.render('pages/registreerumine', {matk: matkad[index]})
}

async function registreeriOsaleja(req, res){
  console.log( "Serverisse saadeti parameetrid:")
  console.log(req.query)

  if (!req.query.nimi){
    return res.end("Matkaja nimi peab olemas olema")
  }


  if (!req.query.matkaId){
    return res.end("Matka identifikaator puudub")
  }
const id = parseInt(req.query.matkaId)
const matk = matkad[req.query.matkaId]
console.log(matk)
if(!matk){
  return res.send("Matka indeks on vale")
}

  const uusMatkaja = {
    nimi: req.query.nimi, 
    email: req.query.email, 
    markus: req.query.markus, 
    id: req.query.matkaId, 
    matkNimetus: matk.nimetus
  }

  matkajad.push(uusMatkaja)
  matk.osalejad.push(uusMatkaja.email)

  console.log("Kõik matkajad:")
  console.log(matkad)

await client.connect()
const database = client.db(andmebaas)
const registreerumised = database.collection("registreerumised")
const tulemus = await registreerumised.insertOne(uusMatkaja)
console.log("Lisati uus matkaja: " + tulemus.insertedId)


  res.render('pages/kinnitus', {matk: matk})
}

function tagastaMatkad(req, res){
res.send(matkad)
}

async function tagastaOsalejad(req, res){
  let matkaIndeks = req.params.matk
 
  await client.connect()
  const database = client.db(andmebaas)
  const registreerumised = database.collection("registreerumised")

  const filter = { 
    id: matkaIndeks
  }

  let vastusMassiiv = await registreerumised.find(filter).toArray()
  client.close()

  res.send(vastusMassiiv)
}


  express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {matkad: matkad}))
  .get('/uudised', (req, res) => res.render('pages/uudised' , {uudised: uudised}))
  .get('/kontakt', (req, res) => res.render('pages/kontakt'))
  .get('/registreerumine/:matk', naitaRegistreerimist) 
  .get('/uudis/:uudis', naitaUudist)
  .get('/kinnitus', registreeriOsaleja)// reg.query.matkaId
  .get('/api/matk', tagastaMatkad)
  .get('/api/matkaja/:matk', tagastaOsalejad)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))