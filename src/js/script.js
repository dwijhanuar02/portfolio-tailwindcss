// Nav Fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const backToTop = document.querySelector('#back-top');
  
  if (window.pageYOffset > fixedNav ) {
    header.classList.add('nav-fixed');
    backToTop.classList.remove('hidden');
    backToTop.classList.add('flex');
  } else {
    header.classList.remove('nav-fixed');
    backToTop.classList.add('hidden');
    backToTop.classList.remove('flex');
  }
}

// Menu
const menu = document.querySelector('#menu');
const navList = document.querySelector('#nav-list');

menu.addEventListener('click', function(){
  menu.classList.toggle('menu-active');
  navList.classList.toggle('hidden');
});

// Dark Mode
const checkbox = document.getElementById('toggle');
const html = document.querySelector('html');
    
checkbox.addEventListener('click', function(){
  if (checkbox.checked){
    html.classList.add('dark'); 
    localStorage.theme = 'dark';
  }else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// look dollar menu
window.addEventListener('click', function(e){
  if(e.target != menu && e.target != navList) {
    menu.classList.remove('menu-active');
    navList.classList.add('hidden');
  }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  checkbox.checked = true; 
} else {
  checkbox.checked = false; 
}

