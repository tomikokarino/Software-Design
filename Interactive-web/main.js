

const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', event => {
  // Image that triggered the modal
  const thumbnail = event.relatedTarget
  // Extract info from data-bs-* attributes
  const sliderType = thumbnail.getAttribute('data-bs-type')
    console.log(sliderType)

    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }
        
    function showSlides(n) {
        let i;
        let slideType = document.getElementById(sliderType);
        console.log(slideType);

        let thisSlide = slideType.getElementsByClassName("slides");
        console.log(thisSlide)

        if (n > thisSlide.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = thisSlide.length}
        for (i = 0; i < thisSlide.length; i++) {
            thisSlide[i].style.display = "none";  
        }
        
        thisSlide[slideIndex-1].style.display = "block";  
        
        }
    })
   