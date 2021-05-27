(function () {
    const burger = document.querySelector('.nav');
    burger.addEventListener('click', () => {
        burger.classList.toggle('responsive');
    });
}());