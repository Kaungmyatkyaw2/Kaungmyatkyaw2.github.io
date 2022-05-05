function menuBar(){
    let menuUl = document.querySelectorAll('ul')[0];
    
    menuUl.classList.toggle('active');

    let BTN = document.querySelectorAll('.menu-btn svg')[0];

    BTN.classList.toggle('fa-bars');


    BTN.classList.toggle('fa-window-close')
    
}

let menuBtn = document.querySelectorAll('.menu-btn')[0];


menuBtn.addEventListener('click',menuBar)



document.querySelectorAll('#sth').forEach(archor => {
    archor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior : 'smooth'
        })
    })
})


ScrollReveal({
    reset:true,
    distance:'100px',
    duration:1800,
    delay:0
});

ScrollReveal().reveal('.title',{delay:100,origin:'left'});

ScrollReveal().reveal('.about .left img',{delay:250 , origin : 'bottom',distance:'100px',duration:1200})

ScrollReveal().reveal('.about .right div',{delay:230 , origin : 'left',distance:'60px',duration:1200})

ScrollReveal().reveal('.about .right p',{delay:230 , origin : 'top',distance:'60px',duration:1200,interval:30})

ScrollReveal().reveal('.about .right a',{delay:230 , origin : 'top',distance:'60px',duration:1200,interval:30})


ScrollReveal().reveal('.skills .left .card-box .card',{delay:230 , origin : 'top',distance:'50px',duration:1200,interval:200})

ScrollReveal().reveal('.skills .left .title-right',{delay:230 , origin : 'top',distance:'50px',duration:1200,interval:200})

ScrollReveal().reveal('.skills .left p',{delay:230 , origin : 'top',distance:'50px',duration:1200,interval:50})

ScrollReveal().reveal('.skills .right .box',{delay:230 , origin : 'left',distance:'70px',duration:1200,interval:300})


