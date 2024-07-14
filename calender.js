document.addEventListener("DOMContentLoaded", function() {
    // Get all month buttons and add click event listeners to each
    const monthButtons = document.querySelectorAll('.month-btn');
    monthButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Toggle active class for the clicked month button
            button.classList.toggle('active');
            
            // Toggle display of corresponding month-calendar div
            const monthCalendar = button.nextElementSibling;
            monthCalendar.classList.toggle('visible');
        });
    });
    
     Get all day buttons and add click event listeners to each
    const dayButtons = document.querySelectorAll('.day-btn');
    dayButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Log the clicked day button's text content
            console.log('Clicked on day:', button.textContent);
        });
    });

    // Days in each month
    const daysInMonth = {
        january: 31,
        february: 29, // Leap year for example
        march: 31,
        april: 30,
        may: 31,
        june: 30,
        july: 31,
        august: 31,
        september: 30,
        october: 31,
        november: 30,
        december: 31
    };

    // Starting days for each month in 2024 (e.g., Jan 1, 2024 is a Monday)
    const startDayOfMonth = {
        january: 1,
        february: 4,
        march: 4,
        april: 7,
        may: 2,
        june: 5,
        july: 7,
        august: 3,
        september: 6,
        october: 1,
        november: 4,
        december: 6
    };

    function toggleCalendar(month) {
        const calendar = document.getElementById(`${month}-calendar`);
        calendar.classList.toggle('visible');

        // If the calendar is already populated, no need to populate again
        if (calendar.childElementCount > 0) return;

        // Add empty spaces for days before the start of the month
        const emptySpaces = startDayOfMonth[
