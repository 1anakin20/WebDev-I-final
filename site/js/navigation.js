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
 * @param {string} year - Year to display, leave the string empty for current year
 **/
function setYear(year = "") {
    let yearElement = document.querySelector("#year");

    if (year == "") {
        let currentYear = new Date().getFullYear().toString();
        yearElement.textContent = currentYear;
    } else {
        yearElement.textContent = year;
    }
}

function playSoundNavigation(event) {
    if (event.target.tagName === 'A') {
        let audio = new Audio('/site/sound/popp.mp3')
        audio.play();
    }
}

function setup() {
    let about = document.querySelector("#about");
    about.addEventListener("click", function () {
        window.alert("Authors:\nJoseph Dubrovsky, Marian Hristov, Tomas Daniel Nieto.\n2020");
    });

    document.addEventListener("click", playSoundNavigation)

    // * Changing the height of the sidebar based on the height of the window
    $("#sidebar>ul").css("top", $("header").height() + "px");

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