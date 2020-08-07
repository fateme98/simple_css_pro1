console.log("hello");

let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let buttons = document.querySelectorAll(".plans button")
let closeButton = document.querySelector(".modal__action--negative")

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        backdrop.style.display = "block";
        modal.style.display = "block"
    })
}

closeButton.addEventListener("click", closeModal)
backdrop.addEventListener("click", closeModal)


function closeModal() {
    backdrop.style.display = "none"
    modal.style.display = "none";
}