const myCarouselElement = document.querySelector('#oliver_Carousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 5000,
    touch: false
})

$("#toggleButton").click(function () {
    $(".myDiv").slideToggle();
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


function effectuerrecherche() {
    var adresse = document.getElementById("adresse").value;
    var dateentree = document.getElementById("dateentree").value;
    var datesortie = document.getElementById("datesortie").value;

    // Realize a ação desejada com os dados inseridos
    console.log("Adresse: " + adresse);
    console.log("Date entree: " + dateentree);
    console.log("Date sortie: " + datesortie);
}
    

// hnjghcxgnh

ScrollReveal().reveal('.card', { delay: 600, distance: '100px' });




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$(function () {
    $("#datepicker").datepicker();
});

$(function () {
    $("#datepicker2").datepicker();
});