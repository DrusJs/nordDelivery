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
        })
    })
}
if (document.querySelector('.js-close-modal')) {
    document.querySelectorAll('.js-close-modal').forEach(el => {
        el.addEventListener('click', function() {
            this.closest('.modal-wrapper').classList.remove('active')
        })
    })
    document.querySelectorAll('.modal-wrapper').forEach(el => {
        el.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal-wrapper')) {
                this.classList.remove('active')
            }         
        })
    })
}
  