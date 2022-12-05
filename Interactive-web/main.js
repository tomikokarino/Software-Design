const slideShowModal = document.getElementById('slideShowModal')

slideShowModal.addEventListener('show.bs.modal', event => {
  // Image that triggered the modal
  const thumbnail = event.relatedTarget
  // Extract info from data-bs-* attributes
  const sliderType = thumbnail.getAttribute('data-bs-type')
  
    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }    

    function showSlides(n) {
      let i;
      let slideType = document.getElementById(sliderType);
      let thisSlide = slideType.getElementsByClassName("slides");
      
      if (slideType.id === sliderType) { 
        slideType.style.display = "block";
        console.log(thisSlide.length)
        if (n > thisSlide.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = thisSlide.length}
        for (i = 0; i < thisSlide.length; i++) {
          thisSlide[i].style.display = "none";  
        }
        thisSlide[slideIndex-1].style.display = "block";  
      }
      else {
        slideType.style.display = "none";
      }
     }
})
   