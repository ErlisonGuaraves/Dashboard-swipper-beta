let slideIndex = 0;   

showSlides();

function showSlides() {    
    let i;    
    const slides = document.getElementsByClassName("mySlides"); 

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";    
    }    

    if (slideIndex >= slides.length) {
       slideIndex = 0;
    }    

    slides[slideIndex].style.display = "block";

    setTimeout(showSlides, 20000);
    slideIndex++; 
}

setInterval(()=>{
    location.reload()
}, 200000)

