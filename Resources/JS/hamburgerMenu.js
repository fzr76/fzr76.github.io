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


// Get the sidebar and hamburger checkbox elements
// const sidebar = document.querySelector('.sidebar');
// const checkbox = document.querySelector('#hamburger-checkbox');

// Add a click event listener to each link in the sidebar
// const links = sidebar.querySelectorAll('a');
// links.forEach(link => {
//     link.addEventListener('click', () => {
//       // Uncheck the hamburger checkbox to close the sidebar
//         checkbox.checked = false;
//     });
// });

// $(document).ready(function() {
//   $('#hamburger-checkbox').change(function() {
//       $('.hamburger-menu, .sidebar').toggleClass('active', this.checked);
//   });
// });
