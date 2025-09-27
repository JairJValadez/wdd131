const themeSelector = document.querySelector('#pick-theme');
const theBody = document.querySelector('body');
const theLogo = document.querySelector('.logo');

function changeTheme() {
    // check to see what the current value of our select is.
    const currentTheme = themeSelector.value;
    // if the value is dark
    if (currentTheme === "dark") {
        // add the dark class to the body
        theBody.setAttribute('class', 'dark');
        // change the source of the logo img to point to the white logo.
        theLogo.src = 'byui-logo_white.png';
    } else {
        // remove the dark class
        theBody.setAttribute('class', '');
        // make sure the logo src is the blue logo.
        theLogo.src = 'byui-logo_blue.webp';
    }
    
}
// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);