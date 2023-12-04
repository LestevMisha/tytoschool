document.addEventListener("DOMContentLoaded", function () {
    var min = new Date();
    var max = new Date();
    max.setFullYear(max.getFullYear() + 1)

    function formatDate(date) {

        // Get year, month, day, hours, minutes, and seconds
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        // Assemble the formatted date string
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        return formattedDate;
    }

    $('.J-datepicker-en').datePicker({
        hasShortcut: true,
        min: formatDate(min),
        max: formatDate(max),
        language: 'en',
        shortcutOptions: [{
            name: 'today',
            day: '0'
        }, {
            name: 'tommorow',
            day: '+1',
            time: '00:00:00'
        }, {
            name: 'in 1 week',
            day: '+7',
            time: '00:00:00'
        },],
        hide: function () {
            console.info(this)
        }
    });

    function docs_observer() {
        const SHEET_ID = "19UdqLgwwjB3wLGa8O1dNSZp_mn912SQXtT0vc5Fib50";
        const SHEET_TITLE = "Sheet1";
        const SHEET_RANGE = "B1:M1000";
        fetch(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`)
            .then(res => res.text())
            .then(resp => {
                var data = JSON.parse(resp.substr(47).slice(0, -2))
                // let cols = data.table.cols
                let rows = data.table.rows
                let dict = []
                for (let i = 0; rows.length > i; i++) {
                    var row = rows[i].c;
                    for (let j = 0; row.length > j; j++) {
                        var value = row[j];
                        if (value != null) {
                            dict.push({ [j + 1]: value.v })
                        }
                    }
                }
                var current_month = document.querySelector(".c-datepicker-date-picker__header-label.c-datepicker-date-picker__header-month").textContent;
                const elements = document.querySelectorAll('a.cell');
                // console.log("current_month:", current_month)
                for (var i = 0; dict.length > i; i++) {
                    var e = dict[i][parseInt(current_month)]
                    if (e != undefined) {
                        // Assuming you have a reference to the document or use document.querySelectorAll directly
                        elements.forEach((element) => {
                            if (element.textContent.trim() == e) {
                                element.parentElement.parentElement.classList.add("disabled");
                            }
                        });
                    }
                }
            });
    }
    docs_observer();

    const right_arr = document.querySelector(".kxiconfont.icon-right.c-datepicker-picker__icon-btn.c-datepicker-date-picker__next-btn.month");
    const left_arr = document.querySelector(".kxiconfont.icon-left.c-datepicker-picker__icon-btn.c-datepicker-date-picker__prev-btn.month");
    right_arr.addEventListener("click", function () {
        docs_observer();
    });
    left_arr.addEventListener("click", function () {
        docs_observer();
    });
});