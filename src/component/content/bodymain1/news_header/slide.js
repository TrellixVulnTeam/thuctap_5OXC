var slideIndex = 1;
showSlides(slideIndex);
var dem;

function currentSlide(n) {
    showSlides(slideIndex = n);
    dem = n;
    console.log(1);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
setInterval(function() {
    var stt = document.getElementsByClassName("mySlides");
    if (dem == null || dem > stt.length) {
        dem = 1;
    }
    currentSlide(dem);
    dem++;
}, 100000)