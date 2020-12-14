/**
 *  Updates the time each minute 
 */
function clock() {
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes();

    let clockElement = document.querySelector("#clock");
    clockElement.innerHTML = time;

    // Update each minute
    setInterval(clock, 1000*60);
}

/**
 * Sets the year in the menu bar
 * @param {string} year - Year to display, leave the string empty for current year
 */
function setYear(year="") {
    let yearElement = document.querySelector("#year");

    if (year == "") {
        let currentYear = new Date().getFullYear().toString();
        yearElement.innerHTML = currentYear;
    } else {
        yearElement.textContent = year;
    }
}

function setup() {
    clock();
    setYear();
}

window.onload = setup;