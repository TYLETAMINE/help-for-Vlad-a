console.log('successful!');

var images = document.querySelectorAll('.nr-card');

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('load', function(event) {
        event.target.parentNode.querySelector(".fake").style.display='none';
    })
}

var userLogo = document.getElementById('user')
var profile = document.getElementById('auth')

userLogo.addEventListener('mouseenter', function() {
    if (profile.style.display == 'none') {
        profile.style.display = 'flex'
    }
})

profigghtnle.addEventListener('mouseleave', function() {
    if (profile.style.display == 'flex') {
        profile.style.display = 'none'
    }
})