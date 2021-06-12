$(document).ready(function () {
    var calendar = document.getElementById("Calendar");

    var calendarObject = new FullCalendar.Calendar(calendar, {
        initialView: 'dayGridMonth',
        initialDate: '2021-06-09',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Image 1 was added',
                start: '2021-06-08'
            },
            {
                title: 'Image 2 was added',
                start: '2021-06-11'
            },
            {
                title: 'Image 4 was added',
                start: '2021-06-22'
            },
            {
                title: 'Video 1 was added',
                start: '2021-06-24'
            }

        ]
    });

    calendarObject.render();

});