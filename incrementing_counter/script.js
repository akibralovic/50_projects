const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target') //kupe se podaci iz data-target atributa, i smestaju u target, i zatim se pomocu + ispred elementa, podaci pretvaraju u num vrednosti
    const c = +counter.innerText //podaci iz countera se smestaju u c varijablu i pretvaraju u num vrednost

    const increment = target / 200

    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)  //setujemo vreme za koje ce se ucitavati funkcija
    }
    else{
      counter.innerText = target
    }
  }

  updateCounter()
})