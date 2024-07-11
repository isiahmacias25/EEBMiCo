// Wait for the DOM to fully load before executing any JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Get all month buttons and add click event listeners to each
    const monthButtons = document.querySelectorAll('.month-btn');
    monthButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Toggle active class for the clicked month button
            button.classList.toggle('active');
            
            // Toggle display of corresponding month-calendar div
            const monthCalendar = button.nextElementSibling;
            monthCalendar.classList.toggle('active');
        });
    });

    // Get all day buttons and add click event listeners to each
    const dayButtons = document.querySelectorAll('.day-btn');
    dayButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // You can handle what happens when a day button is clicked here
            console.log('Clicked on day:', button.textContent);
        });
    });
});
