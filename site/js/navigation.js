/**
 *  Updates the time each minute 
 */
function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time = "";

    if (hours < 10) {
        time += "0" + hours;
    } else {
        time += hours;
    }

    time += ":";

    if (minutes < 10) {
        time += "0" + minutes;
    } else {
        time += minutes;
    }

    document.querySelector("#clock").innerHTML = time;
}

/**
 * Sets the year in the menu bar
 **/
function setYear() {
    let currentYear = new Date().getFullYear().toString();
    document.querySelector("#year").textContent = currentYear;
}

/**
 * Plays sounds when items are clicked in the website
 * @param {*} event 
 */
function playSoundNavigation(event) {
    if (!muted && event.target.tagName === 'A') {
        let audio = new Audio("/site/sound/popp.mp3");
        audio.play();
    }
}

function setup() {
    let about = document.querySelector("#about");
    about.addEventListener("click", function () {
        window.alert("Authors:\nJoseph Dubrovsky, Marian Hristov, Tomas Daniel Nieto.\n2020");
    });
    
    let explainer = document.querySelector("#explainer");
    let logo = document.querySelector("#logo");
    logo.addEventListener("click", function () {
        explainer.style.display = "initial";
    });

    explainer.addEventListener("click", function () {
        explainer.style.display = "none";
    })

    // * Changing the height of the sidebar based on the height of the window
    $("#sidebar>ul").css("top", $("header").height() + "px");
    $(".hidden-menu").css("top", ($("header").height() - 15) + "px");
    $("*, html").css("scroll-margin-top", $("header").height() + parseInt($("main>.window>.window-body>article").css("padding-top")) + "px");
    clock();
    // Update each second
    window.setInterval(clock, 1000);
    setYear();
}

// * Changing the height of the sidebar based on the height of the window after resize
$(window).resize(function () {
    $("#sidebar>ul").css("top", $("header").height() + "px");
});

window.addEventListener("load", setup);