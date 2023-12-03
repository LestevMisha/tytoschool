document.addEventListener("DOMContentLoaded", function () {

    // calendar
    var date = new Date();
    const calendar = document.getElementById("meeting-time");
    calendar.min = date.toISOString().split(".")[0];
    date.setFullYear(date.getFullYear() + 1)
    calendar.max = date.toISOString().split(".")[0];
});