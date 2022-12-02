const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', () => {

    stopSongs()
    document.getElementById(sound).play() //klikom na element sa id = sound, pokrece se pesma
  })

  document.getElementById('buttons').appendChild(btn)
})

function stopSongs(){ //Funkcija koja zaustavlja prethodno pokrenutu pesmu i vraca je na pocetno stanje
  sounds.forEach(sound => {

    const song = document.getElementById(sound)

    song.pause()

    song.currentTime = 0;

  })
}