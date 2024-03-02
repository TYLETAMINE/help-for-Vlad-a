console.log('successful!');

var images = document.querySelectorAll('.nr-card');

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('load', function(event) {
        event.target.parentNode.querySelector(".fake").style.display='none';
    })
}