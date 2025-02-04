/* NOTES
    add translation 
    add easter eggs and whene ever someone finds them give them point
    
    use spotify API to get the latest song that you have listined to 
 */
let theme = 'dark';
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
const IconMoon = document.getElementById('ICONmoon');
const IconSun = document.getElementById('ICONsun');
let darkModePopUp = document.getElementById('darkmode-popup');
const ThemeModeSound = new Audio('themSound.mp3');
const textToType = "Welcome to my portfolio";
let index = 0;

if(theme = 'dark'){
    IconMoon.style.display = 'none';
}
else{
    IconSun.style.display = 'none';
}
if(currentTheme === 'dark'){
    document.body.classList.add('dark-theme');
}
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    let theme = 'light';
    if(document.body.classList.contains('dark-theme')){
        theme = 'dark';
        IconMoon.style.display = 'none';
        IconSun.style.display = 'inline';
        ThemeModeSound.play();
        navigator.vibrate(500); 
    }
    else{
        theme = 'light';
        IconMoon.style.display = 'inline';
        IconSun.style.display = 'none';
    }
    
    //dark mode pop up notif
    if(theme == 'dark'){
        darkModePopUp.classList.add("show")
        localStorage.setItem('theme', theme);
        setTimeout(() => {
            darkModePopUp.classList.remove("show")
        }, 3000);
    }
});


function typeWrite(element) {
    let text = element.innerHTML;
    element.innerHTML = "";
    let i = 0;

    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100); // typing speed 
      }
    }
    typing();
  }
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".type-text").forEach(typeWrite);
  });

alert("!!This website has sound effects!!");