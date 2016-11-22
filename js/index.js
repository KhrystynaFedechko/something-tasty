function openModal() {
    document.getElementById('myModalCake').style.display = "block";
}

function closeModal() {
    document.getElementById('myModalCake').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesCake");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function openModalCupC() {
    document.getElementById('myModalCupC').style.display = "block";
}

function closeModalCupC() {
    document.getElementById('myModalCupC').style.display = "none";
}

var slideIndexCupC = 1;
showSlidesCupC(slideIndexCupC);

function plusSlidesCupC(n) {
    showSlidesCupC(slideIndexCupC += n);
}

function currentSlideCupC(n) {
    showSlidesCupC(slideIndexCupC = n);
}

function showSlidesCupC(n) {
    var i;
    var cSlides = document.getElementsByClassName("mySlidesCupC");
    if (n > cSlides.length) {
        slideIndexCupC = 1
    }
    if (n < 1) {
        slideIndexCupC = cSlides.length
    }
    for (i = 0; i < cSlides.length; i++) {
        cSlides[i].style.display = "none";
    }
    cSlides[slideIndexCupC - 1].style.display = "block";
}
