//picture array
document.addEventListener('DOMContentLoaded', () => {
var picArray=["photos/mollyasolaf.jpeg","photos/esmebunnypillow.JPG","photos/esmeimage.jpg"]
//Caption array
var capArray=["Molly sporting her olof attire for winter","Esme relaxing with her Easter pillow","esme sad about her crate"];
//global variables
var image=document.getElementById("slide-image");
var text=document.getElementById("slide-text");

var currIndex=0;
//html editing function
function slideEditor(index){
  image.src=picArray[index];
  text.textContent=capArray[index];
  
}

//loop controll
function startSlideshow()
 { console.log('Starting slideshow'); 
  console.log(currIndex);
  setInterval(() => { slideEditor(currIndex); 
    currIndex++; 
    if (currIndex === picArray.length)
       { currIndex = 0; } 
  }, 5000); // Change image every 5 seconds } startSlideshow()
}
startSlideshow();
});