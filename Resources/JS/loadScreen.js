window.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    setTimeout(function() {
            // fade out
        overlay.style.opacity = 0;
            // remove after transition
        setTimeout(function(){ 
            overlay.style.display = "none";
            // remove initial-animation class after the overlay is gone
            removeInitialAnimationClass();
        }, 500); // 500ms is the transition time
    }, 4000); // 4000ms = 4 seconds
});

function removeInitialAnimationClass() {
    var elements = document.querySelectorAll('.initial-animation');
    elements.forEach(function(element) {
        element.classList.remove('initial-animation');
    });
}
