/* NOTES
    add translation 
    add easter eggs and whene ever someone finds them give them point
 */
let theme;
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
const IconMoon = document.getElementById('ICONmoon');
const IconSun = document.getElementById('ICONsun');
let darkModePopUp = document.getElementById('darkmode-popup');

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
        }, 2000);
    }
});


