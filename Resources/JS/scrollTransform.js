window.addEventListener('scroll', function() {
    var diagContentLinks = document.querySelectorAll(".diag-content a");

    if (window.scrollY > 0) {
        document.body.classList.add('scroll');
        document.querySelector(".diagonal-column1").classList.add("unskew");
        document.querySelector(".diagonal-column2").classList.add("unskew");
        document.querySelector(".sidebar .diag-content").classList.add("unskew");
        for (var i = 0; i < diagContentLinks.length; i++) {
            diagContentLinks[i].classList.add("unskew");
        }
    } else {
        document.body.classList.remove('scroll');
        document.querySelector(".diagonal-column1").classList.remove("unskew");
        document.querySelector(".diagonal-column2").classList.remove("unskew");
        document.querySelector(".sidebar .diag-content").classList.remove("unskew");
        for (var i = 0; i < diagContentLinks.length; i++) {
            diagContentLinks[i].classList.remove("unskew");
        }
    }
});
