//Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark') 
}) 


//Typing Effect
let typed =new Typed('.auto-input',{
    strings: ['freelancer!', 'blogger!' ,'Junior Dev!', 'freelancer!'],

    typedSpeed:100,
    backSpeed:100,
    backdelay:2000,
    loop:true, 
});

// Active Link state o scroll

//Get All Links
let navLinks = document.querySelectorAll('nav ul li a')

//Get All  Sections
let sections = document.querySelectorAll('section')
//console.log('section')

window.addEventlistener('scroll', function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos <(section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
    }
    });
});