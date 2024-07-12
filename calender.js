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
            if (monthCalendar.style.display === "none" || monthCalendar.style.display === "") {
                monthCalendar.style.display = "block";
            } else {
                monthCalendar.style.display = "none";
            }
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
});
