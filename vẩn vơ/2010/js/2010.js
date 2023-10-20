var numImages = 50;
for (var i = 0; i < numImages; i++) {
    var image = document.createElement('img');
    image.src = 'https://png.pngtree.com/png-clipart/20220117/original/pngtree-hand-painted-vector-rose-bouquet-png-image_7123814.png'; 
    image.classList.add('hoaroi');
    var randomTop = Math.random() * window.innerHeight;
    var randomLeft = Math.random() * window.innerWidth;
    var randomDelay = Math.random() * 5;
    image.style.top = randomTop + 'px';
    image.style.left = randomLeft + 'px';
    image.style.animationDelay = randomDelay + 's';
    image.style.animationDuration = '5s'; 
    document.querySelector('.hoaroi').appendChild(image);
}