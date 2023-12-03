document.addEventListener("DOMContentLoaded", () => {

    function apply_drop(form, arr) {
        // Init
        const input = form.querySelector(".input-dropdown");
        let ul = form.querySelector("ul");
        let arrow = form.querySelector(".dropdown-arrow");
        const dropdown = form.querySelector(".dropdown");
        dropdown.style.height = "0px";

        arrow.addEventListener("click", () => {
            if (dropdown.style.height === "0px") {
                // Dropdown is closed, open it
                dropdown.style.height = "13em";
                arrow.classList.toggle("arrow_rotate");
            } else {
                // Dropdown is open, close it
                dropdown.style.height = "0px";
                arrow.classList.toggle("arrow_rotate");
            }
        });

        const sttlements_setup = async function () {
            for (var i = 0; i < arr.length; i++) {
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(arr[i]));
                li.setAttribute("class", "settlement-item");
                ul.appendChild(li);
            };

        };

        sttlements_setup().then(() => {
            let lis = ul.querySelectorAll(".settlement-item");
            // insert chosen value and close dropdown (if tag li was clicked include arrow rotation) -->
            lis.forEach((li) => {
                li.addEventListener("click", function () {
                    console.log(li.textContent)
                    input.value = li.textContent;
                    dropdown.style.height = "0";
                    arrow.classList.toggle("arrow_rotate");
                });
            });
        });

        // if there was a click outside of the dropdown than close dropdown (if it was clicked out of input include arrow rotation) -->
        document.addEventListener("click", function (e) {
            if (!input.contains(e.target) && !ul.contains(e.target) && !arrow.contains(e.target)) {
                if (dropdown.style.height !== "0px") {
                    arrow.classList.toggle("arrow_rotate");
                }
                dropdown.style.height = 0;

            }
        });



        // input search throughout dropdown -->
        input.addEventListener("keyup", function () {
            let filter = input.value.toLowerCase();
            let li = ul.getElementsByTagName("li");
            for (let i = 0; i < li.length; i++) {
                let item = li[i];
                let txtValue = item.textContent || item.innerText;
                console.log(txtValue.toLowerCase().indexOf(filter))
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            }
        });


        // if input is focused than show dropdown (also include arrow rotation) -->
        input.addEventListener("focus", function () {
            arrow.classList.toggle("arrow_rotate");
            dropdown.style.height = "13em";
        });
    }
    
    // Init
    let sunp_1 = document.getElementById("1-setinput-js");
    let sunp_2 = document.getElementById("2-setinput-js");
    let sunp_3 = document.getElementById("3-setinput-js");
    let sunp_4 = document.getElementById("4-setinput-js");
    var subjects = ['Английский', 'Математика', 'Биология', 'Химия', 'Программирование'];
    var options = ['Хочу стать преподавателем', 'Записаться на пробное занятие'];
    var lesson_types = ['Индивидуальные занятия - 2000 ₽', 'Групповые занятия - 1000 ₽'];
    apply_drop(sunp_1, subjects)
    apply_drop(sunp_2, subjects)
    apply_drop(sunp_3, options)
    apply_drop(sunp_4, lesson_types)

});