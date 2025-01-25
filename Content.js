// Change the background color to red once the page has fully loaded
// window.onload = () => {
//     document.body.style.setProperty('background-color', 'red', 'important');
// };
window.onload = () => {
    const elementsWithColor = {};

    document.querySelectorAll("*").forEach(curElement => {
        curColor = getComputedStyle(curElement);
        if (curColor && curColor !== "rgb(0,0,0)" && curColor !== "rgb(0,0,0,0)") {
            const elementName = curElement.id || curElement.className || curElement.tagName;
            elementsWithColor[elementName] = curColor;
        }

    });
    console.log(elementsWithColor);
};