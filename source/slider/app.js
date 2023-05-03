
    const slides = document.querySelectorAll('.slide')

    
    for (const slide of slides) {
        slide.addEventListener('click', () =>  {

            clearActiveClasses()
            slide.classList.add('active')
       
        })
   
    }
    for (const slide of slides)
    document.addEventListener('keydown', (event) => {
        event.preventDefault()
        if (event.code.toLowerCase = 'space') {
            clearActiveClasses()
        }
    })
    
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }


