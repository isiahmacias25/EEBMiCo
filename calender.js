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
            // Log the clicked day button's text content
            console.log('Clicked on day:', button.textContent);
        });
    });

    // Function to toggle calendar visibility based on month
    function toggleCalendar(month) {
        var calendar = document.getElementById(month + "-calendar");
        if (calendar.style.display === "none") {
            calendar.style.display = "block";
        } else {
            calendar.style.display = "none";
        }
    }

    // Example of how to call toggleCalendar
    // toggleCalendar("january");
});
