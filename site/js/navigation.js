/**
 *  Updates the time each minute 
 */
function clock() {
    let date = new Date();
    let time = date.getHours() + ":";
    let minutes = date.getMinutes();
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
 */
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
        window.alert("Authors: Joseph Dubrovsky, Marian Hristov, Tomas Daniel Nieto.\n2020")
    });

    clock();
    setYear();
}

window.addEventListener("load", setup);