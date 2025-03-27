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
                                            //ThemeModeSound.play();    TURN on later
                                            //navigator.vibrate(500);   TURN on later
    }
    else{
        theme = 'light';
        IconMoon.style.display = 'inline';
        IconSun.style.display = 'none';
    }
    
    // Update navbar link colors dynamically
    const navLinks = document.querySelectorAll('#navBar > a');
    navLinks.forEach(link => {
        link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
    });

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
    const text = element.dataset.text || element.innerHTML; // Use data attribute for text
    element.innerHTML = ""; // Clear the content
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 200); // Adjust speed here
        }
    }
    typing();
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".type-text").forEach((el) => {
        el.dataset.text = el.innerHTML; // Store original text
        typeWrite(el);
    });
});

//alert("!!This website has sound effects!!");