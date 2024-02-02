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
  