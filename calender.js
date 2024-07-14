document.addEventListener("DOMContentLoaded", function() {
    // Get all month buttons and add click event listeners to each
    const monthButtons = document.querySelectorAll('.month-btn');
    monthButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Toggle visibility of the corresponding month-calendar div
            const monthCalendar = button.nextElementSibling;
            if (monthCalendar.classList.contains('visible')) {
                monthCalendar.classList.remove('visible');
            } else {
                monthCalendar.classList.add('visible');
            }
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

    // Starting days for each month in 2024
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
        if (!calendar) return; // Exit if the calendar element is not found

        // If the calendar is already populated, no need to populate again
        if (calendar.childElementCount === 0) {
            // Add empty spaces for days before the start of the month
            const emptySpaces = startDayOfMonth[month] - 1;
            for (let i = 0; i < emptySpaces; i++) {
                const emptyDiv = document.createElement('div');
                emptyDiv.className = 'empty-day';
                calendar.appendChild(emptyDiv);
            }

            // Add actual days of the month
            for (let day = 1; day <= daysInMonth[month]; day++) {
                const dayBtn = document.createElement('button');
                dayBtn.className = 'day-btn';
                dayBtn.textContent = day;
                calendar.appendChild(dayBtn);
            }
        }
    }

    // Make sure to initialize calendars when the document is loaded
    // For example, you can call toggleCalendar('january') here if you want to prepopulate
});
