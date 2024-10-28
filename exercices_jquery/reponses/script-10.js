document.addEventListener('DOMContentLoaded', function () {
    var imgSrc = document.querySelector('#imgsrc img');
    var box = document.querySelector('.box');

    imgSrc.addEventListener('mousemove', function (event) {
        var x = event.clientX - imgSrc.getBoundingClientRect().left;
        var y = event.clientY - imgSrc.getBoundingClientRect().top;

        box.style.backgroundImage = 'url(' + imgSrc.src + ')';
        box.style.backgroundSize = imgSrc.width + 'px ' + imgSrc.height + 'px';
        box.style.backgroundPosition = (-x + imgSrc.width / 2) + 'px ' + (-y + imgSrc.height / 2) + 'px';
    });
});
