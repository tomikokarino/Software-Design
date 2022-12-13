/**********************************************************************************/
/*********************************** Slideshow ************************************/
/*** Tweaked this code:  https://www.w3schools.com/howto/howto_js_slideshow.asp ***/ 
/**********************************************************************************/

const slideShowModal = document.getElementById('slideShowModal')
// <div id="slideShowModal"> gets console logged only once here
console.log('slideShowModal before eventlistener', slideShowModal)

slideShowModal.addEventListener('show.bs.modal', event => {
  // but here <div id="slideShowModal"> gets console logged twice
  console.log('slideShowModal after eventlistener', slideShowModal)
  // Image that triggered the modal
  const thumbnail = event.relatedTarget
  // Extract info from data-bs-* attributes
  const sliderType = thumbnail.getAttribute('data-bs-type')
  
    let slideIndex = 1;

    showSlides(slideIndex);
    // console.log(slideIndex)
    
    function plusSlides(n) {  
      showSlides(slideIndex += n);
    }

    let prevArrow = document.getElementById("prev");
    prevArrow.addEventListener("click", () => {plusSlides(-1);});

    let nextArrow = document.getElementById("next");
    nextArrow.addEventListener("click", () => {plusSlides(1);});
    
    function showSlides(n) {
        let i;
        let slideType = document.getElementById(sliderType);
        let thisSlide = slideType.getElementsByClassName("slides");
                
        if (slideType.id === sliderType) { 
          slideType.style.display = "block";
            // console.log(slideIndex)
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

/*****************************************************************/
/**************************** Video ******************************/
/** Tweaked this code: https://codepen.io/JacobLett/pen/ExmqNLb **/ 
/*****************************************************************/  

const videoModal = document.getElementById('videoModal')
// <div id="videoModal"> gets console logged once
console.log('videoModal before eventlistener', videoModal)

videoModal.addEventListener('show.bs.modal', play => {
  // Here <div id="videoModal"> gets console logged twice
  console.log('videoModal after eventlistener', videoModal)
 // Image that triggered the modal
 const videoThumb = play.relatedTarget
 // Extract info from data-bs-* attributes
 const videoType = videoThumb.getAttribute('data-bs-type');
 const videoSRC = videoThumb.getAttribute('data-videoSRC');
 const videoSRCauto = videoSRC + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
 const iframeTag = document.getElementById("videoFrame");
 const srcAtt = document.createAttribute("src");
 
 videoModal.addEventListener('shown.bs.modal', function(e) {
    iframeTag.setAttributeNode(srcAtt);
    srcAtt.value = videoSRCauto;
  })
  videoModal.addEventListener('hide.bs.modal', function(e) {
    iframeTag.setAttributeNode(srcAtt);
    srcAtt.value = videoSRC;
  })
  
  
})

/***************************************************************************/
/*************************** ScratchOff image ******************************/ 
/***************************************************************************/

const scratchModal = document.getElementById("scratchOffModal")
// <div id="scratchOffModal"> gets console logged once
console.log('scratchModal before eventListener', scratchModal)
scratchModal.addEventListener('show.bs.modal', scratch => {
// <div id="scratchOffModal"> gets console logged twice
console.log('scratchModal after eventListener', scratchModal)

  const scratchThumb = scratch.relatedTarget
  let imgSRC = scratchThumb.getAttribute('data-bs-imgSRC')
  let topLayerBackground = scratchThumb.getAttribute('data-bs-background')
  let topLayer;
  
  const scratchIMG = function(sketch) {

   sketch.preload = function() {

      let img = sketch.loadImage(scratchThumb.getAttribute('data-bs-imgSRC'))

      sketch.setup = function() {
        sketch.createCanvas(250, 332)
        topLayer = sketch.createGraphics(250, 332)
        topLayer.background(topLayerBackground);
        topLayer.text("scratch me", 100, 150);
        topLayer.strokeWeight(50);
        topLayer.blendMode(sketch.REMOVE); 
      };
  
      sketch.draw = function() {
        sketch.image(img, 0, 0, 250, 332);

        if(sketch.mouseIsPressed) {
          topLayer.line(sketch.pmouseX, sketch.pmouseY, sketch.mouseX, sketch.mouseY)
        }
      
        sketch.image(topLayer, 0,0, 250, 332);
      };
    };
    
  };
  let newScratch = new p5(scratchIMG, document.getElementById("scratch-content"));

})

