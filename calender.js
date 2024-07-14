console.log("JavaScript Loaded");


document.addEventListener("DOMContentLoaded", function() {
    const daysInMonth = {
        january: 31,
        february: 29,
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

        if (calendar.childElementCount > 0) return;

        const emptySpaces = startDayOfMonth[month] - 1;
        for (let i = 0; i < emptySpaces; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'empty-day';
            calendar.appendChild(emptyDiv);
        }

        for (let day = 1; day <= daysInMonth[month]; day++) {
            const dayBtn = document.createElement('button');
            dayBtn.className = 'day-btn';
            dayBtn.textContent = day;
            calendar.appendChild(dayBtn);
        }
    }

    document.querySelectorAll('.month-btn').forEach(button => {
        button.addEventListener('click', () => {
            const month = button.textContent.toLowerCase();
            toggleCalendar(month);
        });
    });
});
