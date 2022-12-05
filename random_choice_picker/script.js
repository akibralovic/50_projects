const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
})

function createTags(input){
 const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()) //filtriramo da za svaki tag, skratimo white space ako to nije jednako sa praznim skringom, zatim manipulisemo nizom, za svaki tag vracamo niz skracenog taga, ynaci ne moze da bude prazan string

 tagsEl.innerHTML = ''

 tags.forEach(tag =>{
  const tagEl = document.createElement('span')
  tagEl.classList.add('tag')
  tagEl.innerText = tag
  tagsEl.appendChild(tagEl)
 })
}