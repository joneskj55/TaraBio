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
const homeArea = document.getElementById('home-nav-highlight');
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
if (innerWidth >= 768) {
    window.onload = function () {
        navHome.className = 'active';
    }
}

function lightUpNav() {
    switch (true) {
        case isElementVisible(homeArea):
            navHome.classname = 'active';
            navAbout.classList.remove('active');
            navEntre.classList.remove('active');
            navDig.classList.remove('active');
            break;
        case isElementVisible(aboutArea):
            navAbout.className = 'active';
            navHome.classList.remove('active');
            navEntre.classList.remove('active');
            navDig.classList.remove('active');
            break;
        case isElementVisible(entreArea):
            navEntre.className = 'active';
            navHome.classList.remove('active');
            navAbout.classList.remove('active');
            navDig.classList.remove('active');
            break;
        case isElementVisible(diglabsArea):
            navDig.className = 'active';
            navHome.classList.remove('active');
            navEntre.classList.remove('active');
            navAbout.classList.remove('active');
            break;
    }
}
if (innerWidth >= 768) {
document.onscroll = function () {
    lightUpNav();
}
}





