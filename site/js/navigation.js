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
 * @param {number} year - Year to display, leave parameter empty for current year
 */
function setYear(year=undefined) {
    let yearElement = document.querySelector("#year");

    if (year == undefined) {
        let currentYear = new Date().getFullYear();
        yearElement.innerHTML = currentYear;
    } else {
        yearElement.innerHTML = year;
    }
}

function setup() {
    clock();
    setYear();
}

window.onload = setup;