document.body.onselectstart=()=>false;

function defaultTheme() {
    document.body.classList.remove('DarkTheme');
    document.body.classList.remove('greenery');
    document.body.classList.remove('purewhite');
    document.body.classList.add('default');
    document.body.classList.remove('redbase');
    document.getElementById("path").setAttribute("fill", getComputedStyle(document.querySelector('body')).getPropertyValue('--basecolor'));
}
function darktheme() {
    document.body.classList.remove('greenery');
    document.body.classList.remove('default');
    document.body.classList.remove('purewhite');
    document.body.classList.remove('redbase');
    document.body.classList.add('DarkTheme');
    document.getElementById("path").setAttribute("fill", getComputedStyle(document.querySelector('body')).getPropertyValue('--basecolor'));
}
function greenery() {
    document.body.classList.remove('default');
    document.body.classList.remove('purewhite');
    document.body.classList.remove('DarkTheme');
    document.body.classList.remove('redbase');
    document.body.classList.add('greenery');
    document.getElementById("path").setAttribute("fill", getComputedStyle(document.querySelector('body')).getPropertyValue('--basecolor'));
}
function pureWhite() {
    document.body.classList.remove('default');
    document.body.classList.remove('DarkTheme');
    document.body.classList.remove('greenery');
    document.body.classList.add('purewhite');
    document.body.classList.remove('redbase');
    document.getElementById("path").setAttribute("fill", getComputedStyle(document.querySelector('body')).getPropertyValue('--basecolor'));
}
function redbase() {
    document.body.classList.remove('DarkTheme');
    document.body.classList.remove('greenery');
    document.body.classList.remove('purewhite');
    document.body.classList.remove('default');
    document.body.classList.add('redbase');
    document.getElementById("path").setAttribute("fill", getComputedStyle(document.querySelector('body')).getPropertyValue('--basecolor'));
}

function show() {
    document.getElementById("dropmenu").style.display = 'block';
};

function hide() {
    document.getElementById("dropmenu").style.display = 'none';
}

document.getElementById("default").addEventListener("click", defaultTheme);
document.getElementById("dark").addEventListener("click", darktheme);
document.getElementById("greenery").addEventListener("click", greenery);
document.getElementById("purewhite").addEventListener("click", pureWhite);
document.getElementById("redbase").addEventListener("click", redbase);
document.getElementById("themes").addEventListener("mouseover", show);
document.getElementById("dropmenu").addEventListener("mouseleave", hide);
