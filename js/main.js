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
let delayItem = window.matchMedia("(max-width: 800px)").matches?80:150
function checkBlocksVisibility() {
    let windowHeight = window.innerHeight;

    blocks.forEach(block =>{
        let blockPosition = block.getBoundingClientRect().top;
        
        if (blockPosition < windowHeight - delayItem) {
            block.style.opacity = "1";
            block.style.transform = "translateY(0)";
        }
    });
}

checkBlocksVisibility();

window.addEventListener('scroll', function() {
    checkBlocksVisibility();
});
SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime : 800,
    // Размер шага в пикселях
    stepSize : 75,
    // Дополнительные настройки:

    // Ускорение
    accelerationDelta : 30,
    // Максимальное ускорение
    accelerationMax : 10,

    // Поддержка клавиатуры
    keyboardSupport : true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll : 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm : true,
    pulseScale : 4,
    pulseNormalize : 1,

    // Поддержка тачпада
    touchpadSupport : true,
})

document.querySelectorAll('.points').forEach(el=>{
    let scrolContainer = el.parentElement.querySelector('.hide-scrollbar')
    let scrolWidth = scrolContainer.firstElementChild.offsetWidth - 10

    

    scrolContainer.addEventListener('scroll', ()=>{
        let count = Math.floor(scrolContainer.scrollLeft / scrolWidth)
        // console.log(count, scrolContainer.scrollLeft, scrolWidth)
        let block = el.querySelectorAll('.points__item')[count]
        if (!block) {return}
        if (block.classList.contains('active')) {
        } else {
            el.querySelector('.active').classList.remove('active')
            block.classList.add('active')
        }
        
    })
})

if (document.querySelector('.preview video')) {
    document.querySelectorAll('.preview video').forEach(el=>{
        el.addEventListener('click', (event)=>{
            event.currentTarget.classList.toggle('js-play')
            if (event.currentTarget.classList.contains('js-play')) {
                event.currentTarget.play()
            } else {
                event.currentTarget.pause()
            }
        })
    })
}