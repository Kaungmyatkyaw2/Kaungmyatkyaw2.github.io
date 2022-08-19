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
    reset:false,
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



ScrollReveal().reveal('.home .container .icons i',{delay:230 , opacity:0, origin : 'bottom',distance:'70px',duration:1700,interval:300})


ScrollReveal().reveal('.home .text-1',{delay:230 , opacity:0, origin : 'bottom',distance:'70px',duration:1700,interval:300})

ScrollReveal().reveal('.home .text-2',{delay:380 , opacity:0, origin : 'bottom',distance:'70px',duration:1700,interval:300})

ScrollReveal().reveal('.home .text-3',{delay:430 , opacity:0, origin : 'bottom',distance:'70px',duration:1700,interval:300})

ScrollReveal().reveal('.home .home-content a',{delay:530 , opacity:0, origin : 'bottom',distance:'70px',duration:1700,interval:300})




ScrollReveal().reveal('.recent-work .card-box',{delay:230 , opacity:0, origin : 'bottom',distance:'70px',duration:1700,interval:300})



ScrollReveal().reveal('#services .content .card-box',{delay:230 , opacity:0, origin : 'bottom',distance:'70px',duration:1700,interval:300})

ScrollReveal().reveal('#review .content .slider .slides',{delay:230 , opacity:0, origin : 'top',distance:'70px',duration:1700,interval:300})


ScrollReveal().reveal('.contact .left .title-left',{delay:230 , opacity:0, origin : 'left',distance:'70px',duration:1700,interval:300})


ScrollReveal().reveal('.contact .left p',{delay:290 , opacity:0, origin : 'left',distance:'70px',duration:1700,interval:300})


ScrollReveal().reveal('.contact .right',{delay:230 , opacity:0, origin : 'bottom',distance:'70px',duration:1700,interval:300})








let link = document.querySelectorAll(".a-tag");


link.forEach(function(current){


    current.addEventListener('click',(e)=>{

        e.preventDefault();



        Swal.fire({
            title: 'Are you sure to go other?',
            text: "You will arrive other project!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Let\'s Go!'
          }).then((result) => {
            if (result.isConfirmed) {



                setTimeout(_=>location.href =current.href,2000)

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Running in progress..'
                  })
            }
          })
          



    })


})