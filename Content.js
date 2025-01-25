// TODO make this adjustable.
// TODO include color of original theme.
const Light = Object.freeze({
    MAX: 40,
});

// This site is poorly affected: https://rgbcolorpicker.com/#google_vignette
// the lowes site is also poorly affected.
window.onload = getColors();

function getColors() {
    // Used chatgpt for some of the selector choices.
    for (curElement of document.querySelectorAll("nav, header, .navbar, .header, path, svg, img, button, input, a, label, html, body, main, footer, section, article, h1, h2, h3, p, div, header")) {
        curColor = window.getComputedStyle(curElement).backgroundColor;

        curElement.style.color = "white";
        curElement.style.backgroundColor = getDarkColor(curColor);

        // console.log(getDarkColor(curColor));


    }
    // for (curElement of document.querySelectorAll("path, svg, img, button, input, a, label")) {
    //     curElement.style.color = "gray";
    //     curElement.style.backgroundColor = ""

    // }
    // const navbars = document.querySelectorAll('nav, header, .navbar, .header');
    // navbars.forEach(nav => {
    //     nav.style.setProperty('background-color', 'rgb(46, 45, 45)', 'important'); // Add a custom background color if needed
    // });


}


function toString(curColor) {
    return String(curColor);
}

function getDarkColor(rgbString) {

    slicedValues = rgbString.slice(rgbString.indexOf("(") + 1, rgbString.indexOf(")"));
    let rgb = [];
    rgb = slicedValues.split(", ");
    // console.log(rgb);
    let r = rgb[0];
    let g = rgb[1];
    let b = rgb[2];
    let resultString;
    let a = rgb[3];
    // console.log(r);
    if (r > Light.MAX) {
        // console.log("TOO BRIGHT")
        r = Light.MAX;
        // console.log(r);
    }

    if (g > Light.MAX) {
        // console.log("TOO BRIGHT")

        g = Light.MAX;
    }
    if (b > Light.MAX) {
        // console.log("TOO BRIGHT")

        b = Light.MAX;
    }
    if (a !== undefined) {
        resultString = `rgba(${r}, ${g}, ${b}, ${a})`;
    } else {
        resultString = `rgb(${r}, ${g}, ${b})`;
    }

    // console.log(resultString)
    return resultString;
}


// From ChatGPT
// Create a <style> element
const style = document.createElement('style');

// Set the CSS rules inside the <style> element
style.innerHTML = `

  div * {
    background-color: transparent !important;  /* Reset background for all child elements */
  }
`;
sheet.insertRule('select, option { background-color: transparent !important; }', sheet.cssRules.length);
// Append the <style> element to the head of the document
document.head.appendChild(style);
