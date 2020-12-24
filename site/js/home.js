function closePopup() {
    let popup = document.querySelector("#wrapper-popup");
    popup.style.display = "none";

    var h2 = {
        text: "Welcome!",
        obj: document.querySelector("h2.typewriter")
    };
    var text1 = {
        text: "Welcome to our website!",
        obj: document.querySelector("#text1")
    };
    var text2 = {
        text: "It contains many facts about computer history.",
        obj: document.querySelector("#text2")
    };
    var text3 = {
        text: "Please enjoy your stay and have fun reading!",
        obj: document.querySelector("#text3")
    };


    setTimeout(500);
    typewriter(h2.text, h2.obj, 0, 100);
    typewriter(text1.text, text1.obj, 0, 80);
    typewriter(text2.text, text2.obj, 0, 80);
    typewriter(text3.text, text3.obj, 0, 80);
}

function setup() {
    document.querySelector("#empty-heading").textContent = "";

    let close = document.querySelectorAll(".close-popup");
    console.log(close);
    for (const e of close) {
        e.addEventListener("click", closePopup);
    }
}

function typewriter(text, obj, i, speed) {
    if (i < text.length) {
        obj.textContent += text.charAt(i);
        i++
        setTimeout(function () {
            typewriter(text, obj, i)
        }, speed);
    }

}


window.addEventListener("load", setup);