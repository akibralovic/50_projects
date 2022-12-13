const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')


smallCups.forEach((cup, idx) => {
  cup.addEventListener('click' , () => highlightCups(idx))
})

function highlightCups(idx){
  console.log(idx)

  //proverava da li je puna sledece casa, ako nije umanjuje za jedan
  if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
    idx--
  }

  smallCups.forEach((cup, idx2) => {  //postavlja clasu full u slucaju da je index koji se klikne isti kao novi index
      if(idx2 <= idx){
        cup.classList.add('full')
      }
      else{
        cup.classList.remove('full')
      }
  })
  updateBigCup()

}

function updateBigCup(){
  //querySelectorAll pravi niz ukupnog broja casa koje su pune, a mi pristupamo samo duzini tog niza
  const fullCups = document.querySelectorAll('.cup-small.full').length

  //isti slucaj, pristupamo samo ukupnom broju casa
  const totalCups = smallCups.length


  //ako je ukupan broj punih casa 0, 
  //percentage koji prikazuje koliko je sipano vode u veliku casu je sakriven, i njegova visina je nula
  if(fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } 
  //u drugim slucajevima (kada god kliknemo na neku malu casu), hocemo da bude vidljivo koliko ima procenata vode u casi
  else {
    percentage.style.visibility = 'visible'
    //kolicinu (visinu) vode u casi dobijas tako sto podelis broj punih casa sa brojem ukupnih broja casa,
    //a zatim to pomnozis sa visinom velike case, ona je 330px u ovom slucaju
    percentage.style.height = `${fullCups / totalCups * 330}px`  //
    //ovde samo koristis 
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }
  //casa je puna kada je ukupan broj casa jednak broju punih casa (sve su sipane u veliku)
   //ovo sluzi da ti ukloni tekst koji prikazuje prazan deo case (remained)
   //isto menjas stil elementa kao kada je casa bila prazna
   //postavljas da remained bude nevidljiv i da mu je visina 0
  if(fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  }
  //ako casa nije puna do kraja, remained koji prikazuje koliko jos moze da se sipa vode je vidljiv
  //i prikazuje 
  else{
    remained.style.visibility = 'visible'
    //ovo je formula da vidis koliko je jos litara ostalo u casi
    //casa je 2 litra, mi racunamo koliko je sipano pa to oduzimamo od 2
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}

