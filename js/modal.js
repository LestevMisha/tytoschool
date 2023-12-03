document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".button-modjs");
    const body = document.querySelector('body');
    const modal_container = document.getElementById("modal-container");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            modal_container.removeAttribute("class");
            modal_container.classList.add("button-modjs");
            body.classList.add("modal-active");
            // elements
            var text = modal_container.querySelector(".b-text");
            var email_inp = modal_container.querySelector("input[name='user_email']");
            var sub_inp = modal_container.querySelector("input[name='user_subject']");

            // temporary values
            var tempform = e.target.parentElement;
            if (tempform.tagName.toUpperCase() == "FORM") {
                var tempemail = tempform.querySelector("input[name='user_email']").value;
                var tempsub = tempform.querySelector("input[name='user_subject']").value;

                // replacements
                if (tempemail != "") {
                    email_inp.value = tempemail;
                }
                if (tempsub != "") {
                    sub_inp.value = tempsub;
                }
            }
            var btn_text = e.target.textContent;
            if (btn_text == "Далее") {
                btn_text = "Заполнение формы"
            }
            text.textContent = btn_text;
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