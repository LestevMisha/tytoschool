document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".button-modjs");
    const html = document.querySelector('html');
    const modal_container = document.getElementById("modal-container");
 
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            modal_container.removeAttribute("class");
            modal_container.classList.add("button-modjs");
            html.classList.add("modal-active");
            var text = e.target.closest(".vblock_v6").querySelector(".price").textContent;
            var input = modal_container.querySelector("input[name='user_plan']")
            input.value = text;
        });
    });

    modal_container.addEventListener("click", function (event) {
        if (!event.target.classList.contains("modal-background")) {
            return
        }
        modal_container.querySelector("form").reset();
        modal_container.classList.add("out");
        html.classList.remove("modal-active");
    });

});