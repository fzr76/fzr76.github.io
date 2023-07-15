window.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    setTimeout(function() {
      // fade out
      overlay.style.opacity = 0;
      // remove after transition
      setTimeout(function(){ overlay.style.display = "none"; }, 500); // 500ms is the transition time
    }, 4000); // 4000ms = 4 seconds
});
