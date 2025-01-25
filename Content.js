// Change the background color to red once the page has fully loaded
// window.onload = () => {
//     document.body.style.setProperty('background-color', 'red', 'important');
// };

window.onload = () => { }
window.onload = getColors();

function getColors() {

    for (curElement of document.querySelectorAll("*")) {
        curColor = window.getComputedStyle(curElement).color;
        console.log("CUR COLOR" + curColor);
    }
}

// window.onload = () => {
//     document.querySelectorAll("*").forEach(curElement => {
//         curColor = window.getComputedStyle(curElement).color;
//         console.log("CUR COLOR " + curColor);
//     });
//     // console.log(elementColors);
// };

// function parseRGB(curColor) {
//     const regex = /^(rgb\(([0-9][,\)]){3})$/;
//     return curColor.match(regex);
// }