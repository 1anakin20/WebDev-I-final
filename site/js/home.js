function closePopup() {
    let popup = document.querySelector("#pandemic-popup");
    popup.style.display = "none";
}

function setup() {
    let close = document.querySelectorAll(".close-popup");
    console.log(close);
    for (const e of close) {
        e.addEventListener("click", closePopup);
    }
}

window.addEventListener("load", setup);