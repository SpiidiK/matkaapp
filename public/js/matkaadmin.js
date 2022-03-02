let matkad = []
async function loeMatkad() {
    let response = await fetch('/api/matk')
    matkad = await response.json()
    naitaMatkadeMenyyd(matkad)
}

function naitaMatkadeMenyyd(matkad) {
    let vastus = ''
    for (let i in matkad) {
       vastus += `
       <button class="btn btn-link btn-lg btn-block" onclick="naitaOsalejaid(${matkad[i].id})">
          ${matkad[i].nimetus}
       </button>
       ` 
    }

    const menyyElement = document.getElementById("matkad-menyy")
    menyyElement.innerHTML = vastus
}
    

async function naitaOsalejaid(matkaIndeks) {
   console.log("matk: " + matkaIndeks)
   let response = await fetch('/api/matkaja/' + matkaIndeks)
   const osalejad = await response.json()
   console.log(osalejad)
   let matk = matkad[matkaIndeks]
    let vastus = ''
    vastus += `
    <div class="pb-2">
        <strong>${matk.nimetus}</strong>
        
        <div>${matk.pildiUrl}</div>
    </div>
    <div class="pb-2">
        ${matk.kirjeldus}
    </div  >
    <div class="row">
    <div class="col-4"><strong>Nimi</strong></div>
    <div class="col-4"><strong>Email</strong></div>
    <div class="col-4"><strong>Märkus</strong></div>
   
    </div>
    `
    for(i in osalejad){
       
        vastus += `
      

        <div class="row">
        <div class="col-4">${osalejad[i].nimi}</div>
        <div class="col-4"> ${osalejad[i].email}</div>
        <div class="col-4">${osalejad[i].markus}</div>
        
        </div>
        `
        
    }


   const matkajadElement = document.getElementById("matka-andmed")
   matkajadElement.innerHTML = vastus
}


loeMatkad()
