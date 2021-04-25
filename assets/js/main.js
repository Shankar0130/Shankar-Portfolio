/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


//onClick function on work image

document.getElementById("work1").onclick = function(){
    // navigate to new page
    window.open('https://shankar0130.github.io/MyCoffee.github.io/', '_blank');
    
}
document.getElementById("work2").onclick = function(){
    // navigate to new page
    window.open('https://github.com/Shankar0130/StackOverFlow_Backend_Clone', '_blank');
    
}
document.getElementById("work6").onclick = function(){
    // navigate to new page
    window.open('https://github.com/Shankar0130/ChatApp_Android_Firebase', '_blank');
    
}
document.getElementById("work4").onclick = function(){
    // navigate to new page
    window.open('https://github.com/Shankar0130/BuyLaptop_ReactProject', '_blank');
    
}
document.getElementById("work5").onclick = function(){
    // navigate to new page
    window.open('https://github.com/Shankar0130/ContactApp_ReactNative', '_blank');
    
}

document.getElementById("work3").onclick = function(){
    // navigate to new page
    window.open('https://shankartshirtstore.netlify.app/','_blank');
    
}

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 




