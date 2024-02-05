const swiperCases = new Swiper('.swiper-cases', {
    loop: true,
    spaceBetween: 200,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});
const swiperReviews = new Swiper('.swiper-review', {
    loop: true,
    spaceBetween: 18,
    slidesPerView: 'auto',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});

if (document.querySelector('.accordion-head')) {
    document.querySelectorAll('.accordion-head').forEach(el => {
        el.addEventListener('click', function() {
            this.parentElement.classList.toggle('active')
        })
    })
}
if (document.querySelector('.js-open-modal')) {
    document.querySelectorAll('.js-open-modal').forEach(el => {
        el.addEventListener('click', function() {
            let active = document.querySelector('.modal-wrapper.active')
            if (active) {
                active.classList.remove('active')
            }
            document.getElementById(this.dataset.modal).classList.add('active')
            document.body.classList.add('no-scroll')
        })
    })
}
if (document.querySelector('.js-close-modal')) {
    document.querySelectorAll('.js-close-modal').forEach(el => {
        el.addEventListener('click', function() {
            this.closest('.modal-wrapper').classList.remove('active')
            document.body.classList.remove('no-scroll')
        })
    })
    document.querySelectorAll('.modal-wrapper').forEach(el => {
        el.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal-wrapper')) {
                this.classList.remove('active')
                document.body.classList.remove('no-scroll')
            }         
        })
    })
}

document.querySelector('.burger-button').addEventListener('click', function() {
    document.querySelector('.header-inner').classList.add('active')
})
document.querySelector('.burger-close').addEventListener('click', function() {
    document.querySelector('.header-inner').classList.remove('active')
})
document.querySelectorAll('.header-link-list__item a').forEach(link=>{
    link.addEventListener('click', function(){
        document.querySelector('.header-inner').classList.remove('active')
    })
})

let phoneInput = document.querySelectorAll(".js-phone");

phoneInput.forEach(input=> {
    ////////////////////////////////////////////////
    // phoneMask - объект маски для инпута телефона
    // Поле phoneMask.unmaskedValue — переводит номер из маски в обычное число
    // Например при значении "+7(900)111-11-11" в поле unmaskedValue будет "79001111111"
    // Поле phoneMask.masked.isComplete — проверяет полностью ли введен номер
    ////////////////////////////////////////////////
    let phoneMask = new IMask(input, {
        mask: "+{7}(000)000-00-00",
    });
})


let blocks = document.querySelectorAll('.fade');
function checkBlocksVisibility() {
    let windowHeight = window.innerHeight;

    blocks.forEach(block =>{
        let blockPosition = block.getBoundingClientRect().top;
        
        if (blockPosition < windowHeight - 150) {
            block.style.opacity = "1";
            block.style.transform = "translateY(0)";
        }
    });
}

checkBlocksVisibility();

window.addEventListener('scroll', function() {
    checkBlocksVisibility();
});