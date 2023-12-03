document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".button-modjs");
    const body = document.querySelector('body');
    const modal_container = document.getElementById("modal-container");
    // elements
    var text = modal_container.querySelector(".b-text");
    var email_inp = modal_container.querySelector("input[name='user_email']");
    var sub_inp = modal_container.querySelector("input[name='user_subject']");

    function activation() {
        modal_container.removeAttribute("class");
        modal_container.classList.add("button-modjs");
        body.classList.add("modal-active");
    }

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            // temporary values
            var tempform = e.target.parentElement;
            if (tempform.tagName.toUpperCase() == "FORM") {
                var tempemail = tempform.querySelector("input[name='user_email']").value;
                var tempsub = tempform.querySelector("input[name='user_subject']").value;
                var sub_lbl_err = document.getElementById("1-setinput-js_errorlbl");
                var email_lbl_err = document.getElementById("user-email_errorlbl");
                // replacements
                if (tempsub != "") {
                    sub_lbl_err.textContent = ""
                    sub_inp.value = tempsub;
                } else {
                    sub_lbl_err.textContent = "Пожалуйста введите поле предмета"
                    return
                }

                if (tempemail != "") {
                    email_lbl_err.textContent = ""
                    email_inp.value = tempemail;
                } else {
                    email_lbl_err.textContent = "Пожалуйста введите поле E-mail"
                    return
                }

                activation()
            } else {
                activation()
            }
            var btn_text = e.target.textContent;
            if (btn_text == "Далее") {
                btn_text = "Заполнение формы"
            }
            text.textContent = "Форма " + btn_text;
        });
    });

    modal_container.addEventListener("click", function (event) {
        if (!event.target.classList.contains("modal-background")) {
            return
        }
        modal_container.querySelector("form").reset();
        modal_container.classList.add("out");
        body.classList.remove("modal-active");
    });

});