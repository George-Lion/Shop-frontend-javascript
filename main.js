const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarMenu);



function toggleDesktopMenu(){
    
    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
    
}

function toggleMobileMenu(){

    const isAsideClose = aside.classList.contains('inactive');
    const isDeskMenu = desktopMenu.classList.contains('inactive');

    if(!isAsideClose){
        aside.classList.add('inactive');
    }
    if(!isDeskMenu){
        desktopMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarMenu(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDeskMenu = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClose){
         mobileMenu.classList.add('inactive');
        }
    if(!isDeskMenu){
         desktopMenu.classList.add('inactive');
        }

    aside.classList.toggle('inactive');
  
}