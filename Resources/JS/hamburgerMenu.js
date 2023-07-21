$(document).ready(function() {
    $('#hamburger-checkbox').change(function() {
        $('.hamburger-menu, .sidebar').toggleClass('active', this.checked);
    });

    // Add a click event listener to each link in the sidebar
    $('.sidebar a').click(function() {
        // Uncheck the hamburger checkbox to close the sidebar
        $('#hamburger-checkbox').prop('checked', false);
        $('.hamburger-menu, .sidebar').removeClass('active');
    });
});
