$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                // vertical: true,
                slidesToShow: 1
            }
        }]
    })

// menu.onclick = function openMenu() {
//     var burger = document.getElementById('sideNav');
//     if (burger.className === 'nav') {
//         burger.className += ' responsive'
//     } else {
//         burger.className = 'nav'
//     }
// }

});
