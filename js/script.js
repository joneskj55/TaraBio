$(document).ready(function () {

//---SMOOTH SCROLLING FROM VIEWPORT TO TARGET--//
    $("a[href^='#']").click(function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 50
        }, 900);
    });
});

//---DOM LOCATIONS---//
const homeArea = document.getElementById('home');
const aboutArea = document.getElementById('about-nav-highlight');
const entreArea = document.getElementById('entre-nav-highlight');
const diglabsArea = document.getElementById('dig-nav-highlight');

//---NAV ELEMENTS---//
const navHome = document.getElementById('home-nav');
const navAbout = document.getElementById('about-nav');
const navEntre = document.getElementById('entre-nav');
const navDig = document.getElementById('dig-nav');

//---CHECK IF ELEMENT IS IN VIEW---//
function isElementVisible(el) {
    let rect = el.getBoundingClientRect(),
        vWidth = window.innerWidth || document.documentElement.clientWidth,
        vHeight = window.innerHeight || document.documentElement.clientHeight,
        efp = function (x, y) {
            return document.elementFromPoint(x, y)
        };

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0
        || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
        el.contains(efp(rect.left, rect.top))
        || el.contains(efp(rect.right, rect.top))
        || el.contains(efp(rect.right, rect.bottom))
        || el.contains(efp(rect.left, rect.bottom))
    );
}

//---INDICATE DOM LOCATION IN NAV---//
window.onload = function () {
    navHome.className = 'active';
}

function lightUpNav() {
    if (isElementVisible(homeArea)) {
        navHome.className = 'active';
    } else {
        navHome.classList.remove('active');
    }
    if (isElementVisible(aboutArea)) {
        navAbout.className = 'active';
    } else {
        navAbout.classList.remove('active');
    }
    if (isElementVisible(entreArea)) {
        navEntre.className = 'active';
    } else {
        navEntre.classList.remove('active');
    }
    if (isElementVisible(diglabsArea)) {
        navDig.className = 'active';
    } else {
        navDig.classList.remove('active');
    }
}

document.onscroll = function () {
    lightUpNav()
};





