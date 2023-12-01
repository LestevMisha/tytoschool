document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".button-modjs");
    const body = document.querySelector('body');
    const modal_container = document.getElementById("modal-container");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            modal_container.removeAttribute("class");
            modal_container.classList.add("button-modjs");
            body.classList.add("modal-active");
            var text = modal_container.querySelector(".b-text");
            text.textContent = e.target.textContent;
        });
    });

    modal_container.addEventListener("click", function(event) {
        if (!event.target.classList.contains("modal-background")) {
            return
        }
        modal_container.classList.add("out");
        body.classList.remove("modal-active");
    });

});