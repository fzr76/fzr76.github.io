window.addEventListener('scroll', function() {
    const navbar = document.getElementById('myNavbar');
    const diagonalColumn = document.getElementById('diagonal-column2');
    const topButton = document.getElementById('top');
    
    if (window.scrollY > 500) {
        document.body.classList.add('scroll');
        navbar.classList.add('show');
        diagonalColumn.style.display = "none";
        topButton.style.display = "flex";
        diagonalColumn.classList.remove('slide-in');  // remove the animation class
    } else {
        document.body.classList.remove('scroll');
        navbar.classList.remove('show');
        diagonalColumn.style.display = "block";
        topButton.style.display = "none";
        void diagonalColumn.offsetWidth;  // trigger a reflow (flush of the CSS cache)
        diagonalColumn.classList.add('slide-in');  // re-add the animation class
    }
});
