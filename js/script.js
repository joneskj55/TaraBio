$(document).ready(function () {

//---SMOOTH SCROLLING FROM VIEWPORT TO TARGET--//
    $("a[href^='#']").click(function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 50
        }, 900);
    });
});

const homeArea = document.querySelector('#home');
const aboutArea = document.querySelector('#about');
const entreArea = document.querySelector('#entrepreneur');
const diglabsArea = document.querySelector('#diglabs');

function isElementVisible(el) {
    let rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || document.documentElement.clientWidth,
        vHeight  = window.innerHeight || document.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0
        || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
        el.contains(efp(rect.left,  rect.top))
        ||  el.contains(efp(rect.right, rect.top))
        ||  el.contains(efp(rect.right, rect.bottom))
        ||  el.contains(efp(rect.left,  rect.bottom))
    );
}
document.getElementById('home').onscroll = function () {isElementVisible(homeArea, aboutArea, entreArea, diglabsArea)};

console.log('is home showing: ' + isElementVisible(homeArea));
console.log('is about showing: ' + isElementVisible(aboutArea));
console.log('is entrepreneur showing: ' + isElementVisible(entreArea));
console.log('is diglabs showing: ' + isElementVisible(diglabsArea));

// if within section add class ul.nav-bar li a:hover:not(.active) {background-color: #111;}




//when viewport gets to id="about" apply .active to #about



