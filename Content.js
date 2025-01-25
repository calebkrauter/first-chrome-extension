const Group = Object.freeze({
    R: 1,
    G: 4,
    B: 7,
    A: 10,
});

const Light = Object.freeze({
    MAX: 120,
});


window.onload = getColors();

function getColors() {
    for (curElement of document.querySelectorAll("*")) {
        // backgroundColor or color?
        curColor = window.getComputedStyle(curElement).backgroundColor;
        // console.log("CUR COLOR" + curColor);
        curElement.style.backgroundColor = getDarkColor(parseRGB(toString(curColor)));

    }
}

function parseRGB(curColor) {
    const regex = /^rgba?\(((\d+)?(\.+)?\d+[,][ ]?)((\d+)?(\.+)?\d+[,][ ]?)((\d+)?(\.+)?\d+[,][ ]?)?((\d+)?(\.+)?\d+[\)]?)$/;
    return curColor.match(regex);
}

function toString(curColor) {
    return String(curColor);
}

function getDarkColor(rgbPattern) {
    // console.log(rgbPattern)
    let resultString = rgbPattern;
    let r = rgbPattern[Group.R];
    let g = rgbPattern[Group.G];
    let b = rgbPattern[Group.B];
    let a = 1;
    if (rgbPattern[Group.R] > Light.MAX) {
        console.log("TOO BRIGHT")
        r = Light.MAX;
    }
    if (rgbPattern[Group.G] > Light.MAX) {
        g = Light.MAX;
    }
    if (rgbPattern[Group.B] > Light.MAX) {
        b = Light.MAX;
    }
    if (rgbPattern[Group.A]) {
        resultString = `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    resultString = `rgb(${r}, ${g}, ${b})`;
    return resultString;
}

// Content.js

// TODO look at this to find out what works.
// window.onload = () => {
//     // Change the primary color using CSS custom properties (if defined)
//     document.documentElement.style.setProperty('--primary-color', 'red');

//     // Alternatively, change the body text color (for sites that use it)
//     document.body.style.color = 'red';

//     // If you need to target specific elements with 'primary' color styles
//     let elements = document.querySelectorAll('*');
//     elements.forEach(el => {
//         if (getComputedStyle(el).color !== 'rgb(255, 0, 0)') {
//             el.style.color = 'red';
//         }
//     });
// };
