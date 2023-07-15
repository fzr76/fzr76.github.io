window.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    setTimeout(function() {
      // fade out
      overlay.style.opacity = 0;
      // remove after transition
      setTimeout(function(){ 
        overlay.style.display = "none";
        // Add class 'overlay-gone' to body when overlay is not displayed
        document.body.classList.add('overlay-gone');
      }, 500); // 500ms is the transition time
    }, 4000); // 4000ms = 4 seconds

    window.addEventListener('resize', function() {
        if(overlay.style.display === "none") {
            document.body.classList.add('overlay-gone');
        } else {
            document.body.classList.remove('overlay-gone');
        }
    });
});
