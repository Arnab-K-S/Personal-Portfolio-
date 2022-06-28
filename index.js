document.body.onselectstart = () => false;

const backgrd=(currentTheme)=>{
    if (currentTheme == "Ocean")
        document.body.style.backgroundImage = " linear-gradient(rgba(0, 0, 79, 0.54),rgba(0, 0, 201, 0.453)) ,url('images/Ocean.jpg')";
}
// var currentTheme='';
const themeSet = (theme) => {
    console.log("function executed");
    return( function(){
        var themeList = document.getElementsByClassName("theme");
        for (let i = 0; i < themeList.length; i++) document.body.classList.remove(themeList[i].id);
        document.body.classList.add(theme);
        backgrd(theme);
        console.log(theme)
        document.getElementById("path").setAttribute("fill", getComputedStyle(document.querySelector('body')).getPropertyValue('--basecolor'));
    })
}

const defaultTheme = () => themeSet('default');
const darktheme = () => themeSet('DarkTheme')
const greenery = () => themeSet('greenery');
const pureWhite = () => themeSet('purewhite');
const redbase = () => themeSet('redbase');

const show = ()=>document.getElementById("dropmenu").style.display = 'block';
const hide = ()=>document.getElementById("dropmenu").style.display = 'none';

document.getElementById("themes").addEventListener("mouseover", show);
document.getElementById("dropdown").addEventListener("mouseleave", hide);


var themeList=document.getElementsByClassName("theme");
for (let i = 0; i < themeList.length; i++) {
    const th = themeList[i];
    th.onclick=themeSet(th.id);
}

if (window.matchMedia("(max-width: 700px)").matches) {
    // document.getElementById("dropdown").addEventListener("click", hide);
    // document.getElementById("project").style.display="none";
}