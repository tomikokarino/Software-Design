/***********************************************************************************/ 
/******************************** Bootstrap 5 Modal ********************************/ 
/*************** https://getbootstrap.com/docs/5.2/components/modal/ ***************/
/***********************************************************************************/



/**********************************************************************************/
/*********************************** Slideshow ************************************/
/*** Tweaked this code:  https://www.w3schools.com/howto/howto_js_slideshow.asp ***/ 
/**********************************************************************************/

const slideShowModal = document.getElementById('slideShowModal')
slideShowModal.addEventListener('show.bs.modal', event => {
  const thumbnail = event.relatedTarget
  const sliderType = thumbnail.getAttribute('data-bs-type')
  
    let slideIndex = 1;

    showSlides(slideIndex);
    
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
        
        /*** Thank you Omar! ***/ 
        let existingSlides = document.querySelectorAll('.slides');
        if (existingSlides) {
          existingSlides.forEach((slide) => {
            slide.style.display = 'none';
          })
        }

        if (slideType.id === sliderType) { 
          slideType.style.display = "block";
            
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

videoModal.addEventListener('show.bs.modal', play => {

 const videoThumb = play.relatedTarget
 
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

/*****************************************************************************/
/*************************** ScratchOff image ********************************/ 
/* Tweaked this code: https://editor.p5js.org/BarneyCodes/sketches/syVZZiBHk */
/*****************************************************************************/

const scratchModal = document.getElementById("scratchOffModal")
scratchModal.addEventListener('show.bs.modal', scratch => {

  const scratchThumb = scratch.relatedTarget
  let topLayerBackground = scratchThumb.getAttribute('data-bs-background')
  let topLayer;

  let existingCanvases = document.querySelectorAll('.p5Canvas');
        
          if (existingCanvases) {
            existingCanvases.forEach((canvas) => {
              canvas.style.display = 'none';
            });
          }

  const scratchIMG = function(sketch) {

   sketch.preload = function() {

      let img = sketch.loadImage(scratchThumb.getAttribute('data-bs-imgSRC'))

      sketch.setup = function() {
        sketch.createCanvas(700, 930)
        topLayer = sketch.createGraphics(700, 930)
        topLayer.background(topLayerBackground);
        topLayer.textSize(75);
        topLayer.textAlign(sketch.CENTER);
        topLayer.text("scratch me!", 325, 465);
        topLayer.strokeWeight(100);
        topLayer.blendMode(sketch.REMOVE); 


        let existingCanvases = document.querySelectorAll('.p5Canvas');
          if (existingCanvases) {
            existingCanvases.forEach((canvas, index) => {
              for (i = 0; i < existingCanvases.length; i++) {
                if(index==[i]) {
                  canvas.style.display = 'block';
                } else {
                  canvas.style.display = 'none';
                }
              }
            });
          }
        }

  
      sketch.draw = function() {
        sketch.image(img, 0, 0, 700, 930);
         if(sketch.mouseIsPressed) {
          topLayer.line(sketch.pmouseX, sketch.pmouseY, sketch.mouseX, sketch.mouseY)
        }
        sketch.image(topLayer, 0,0, 700, 930);
      };
    };

  };
  let newScratch = new p5(scratchIMG, document.getElementById("scratch-content"));
 
})