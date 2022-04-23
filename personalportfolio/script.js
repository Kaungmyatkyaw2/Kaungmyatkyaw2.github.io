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

