const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})


// Bring in toggle buttons (queriSelectorAll)
// Loop through nodeList (forEach)
// Add click event(addEventListener)
// Toggle the active class on the parent node(.parentNode & classList.toggle())