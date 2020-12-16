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
    // Update each minute
    setInterval(clock, 1000);
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

function setup() {
    let about = document.querySelector("#about");
    about.addEventListener("click", function () {
        window.alert("Authors:\nJoseph Dubrovsky, Marian Hristov, Tomas Daniel Nieto.\n2020");
    });

    // * Changing the height of the sidebar based on the height of the window
    $("main").css("height", $(window).height() - $("nav").height() + "px");
    $("aside").css("height", "100%");
    $("#sidebar").css("height", "100%");

    clock();
    setYear();
}

// * Changing the height of the sidebar based on the height of the window after resize
$(window).resize(function () {
    $("main").css("height", $(window).height() - $("nav").height() + "px");
    $("aside").css("height", "100%");
    $("#sidebar").css("height", "100%");
});

window.addEventListener("load", setup);