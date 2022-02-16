let uudis1 = {
    id: "1",
    pealkiri: 'Juhend, kuidas matkata maroko kõrvetavat kõrbes',
    kommentaarid: '(12)',
    tekst: 'Maroko pakub suhteliselt lihtsat juurdepääsu suurepärasele Sahara kõrbele, mis on suurim kuum kõrb maa peal. Maroko külastades on tohutu luited, näiliselt lõputud liivarandused, ettearvamatu kliima, vahuveinid oaasid ja vastupidav taimestik, ebasoodsam ja äärmuslik ala on seikluste otsijatele mõeldud magnetit.',
  pilt: "./assets/uudis1.jpg",
    
}
let uudis2 = {
    id: "2",
    pealkiri: 'Konservipurgiga mõmmide keskel ehk automatk USA läänerannikul  ',
    kommentaarid: '(22)',
    tekst: 'Automatk Ameerika Ühendriikides kuulub paljude inimeste reisiunistuste nimekirja. Mööda laia maanteed kulgemine on üheaegselt põnev ja lõõgastav. Põnev eelkõige seetõttu, et USA on tohutult suur ja sellele suurele maalapile mahub palju vingeid kohti. Vaid paaritunnise autosõiduga võib vahetada ranna lumise mäetipu või kõrbe lopsaka metsa vastu.',
   pilt: "./assets/uudis2.jpg",
    
}
let uudis3 = {
    id: "3",
    pealkiri: 'Matkavarustuse valimise ABC',
    kommentaarid: '(3)',
   tekst: 'Matkavarustuse soetamist tasub alustada jalanõudest. Eesti tingimustes on parim pehme tallaga jalats, et oleks hea liikuda. Jäiga tallaga jalanõud on mõeldud kivistesse Alpidesse tehniliseks ronimiseks. Jalanõu peab eelkõige olema mugav. Kas see riietega kokku sobib, pole kogenud matkaja kinnitusel oluline.',
   pilt: "./assets/uudis3.jpg",
    
}
let uudis4 = {
    id: "4",
    pealkiri: 'Ellujäämisnipid talvel telkimiseks',
    kommentaarid: '(11)',
    tekst: 'Põhja-Rootsis kelgukoerte giidina ja 2019. aastal 300-kilomeetrise Fjällräven Polar polaarmatka kelgukoertega läbinud Maiu Lünekund jagab hüva nõu, kuidas öö telgis keset paksu ja lumist metsa turvaliselt mööda saata. 1) Ära higista, ära saa märjaks „Don’t sweat, don’t get wet – ära higista, ära saa ',
   pilt: "./assets/uudis4.jpg",
    
}
let uudis5 = {
    id: "5",
    pealkiri: 'Lahtise tule kasutamisel on oluline olla äärmiselt ettevaatlik.',
    kommentaarid: '(8)',
    tekst: 'Näiteks põhjustab kodus sageli tulekahju grillimine või lõkke tegemine. Seetõttu on nende tegevuste juures oluline järgida ohutusreegleid nii eramajas kui ka kortermajas. Vaata ohutu grillimise ja lõkke tegemise juhendit SIIT',
  pilt: "./assets/uudis5.jpg",
    
}
let uudis6 = {
    id: "6",
    pealkiri: 'Kui need seinad räägiksid: RMK metsamajad ja -onnid naudivad matkajate populaarsust',
    kommentaarid: '(5)',
    tekst: 'Järvamaa on igas mõttes rikas paik: siin on peaaegu kõike. On ka üks riigimetsa majandamise keskuse metsamaja (Vanapagana) ja üks matkaonn (Saeveski). Kuidas neis elu käib? Neid majakesi otsides peab rännukihk matkaselli viima Lõuna-Järvamaale Türi valda Rassi küla metsapadrikusse. ',
   pilt: "./assets/uudis6.jpg",
}






let uudised = [uudis1, uudis2, uudis3, uudis4, uudis5, uudis6 ]

function looUudisHTML(uudis) {
    return `
    <div class="col-4 card">
        <img class="card-img-top" src="${uudis.pilt}"
        <div class="card-body">
        <div class="card-title"> ${uudis.pealkiri} <span class="komm">
          ${uudis.kommentaarid}</span>
        </div>
        <div class="card-text"> 

        <div class="pikk"> 
             ${uudis.tekst}
        </div>
    <div>
    <button class="uudisnupp" >Vaata edasi</button>
    </div>
    </div>
    </div>
    `
}



function naitaUudiseid() {

let valjundElement = document.getElementById("valjund")
let valjundHTML = ''
valjundHTML += '<div class="row">'
for (let i = 0; i < uudised.length; i++) {
    valjundHTML += looUudisHTML(uudised[i])
}
valjundHTML += '</div>'
valjundElement.innerHTML = valjundHTML
}

naitaUudiseid()