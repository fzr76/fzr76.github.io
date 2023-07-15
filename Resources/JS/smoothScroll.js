// Include jQuery library (ensure you have it loaded before this code)
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

// Smooth scrolling
$(document).ready(function () {
  // Add smooth scrolling to all anchor links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800, // Adjust scrolling speed here (in milliseconds)
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  });
});
