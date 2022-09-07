import startCharts from '/assets/js/charts.js'

startCharts()

// Transition
function trasintionAddClick(elements) {
  elements.forEach((value) => {
    value.addEventListener('click', (e) => {
      const baseHash = window.location.hash
      const targetHash = value.getAttribute('href')      
      const targetSection = document.querySelector(targetHash)
      
      if (baseHash !== targetHash && baseHash !== '') {
        const baseSection = document.querySelector(baseHash)
        /* Add trasition opacity to current section when changing
           section and remove transition target section    
        */
       baseSection.classList.toggle('transition')
       targetSection.classList.remove('transition')
      
      }
      
    })
  }
  )

}

const links = document.querySelectorAll('div.aside nav a')
trasintionAddClick(links)

