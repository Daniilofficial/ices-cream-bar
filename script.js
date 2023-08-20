document.querySelector('menu').addEventListener('click', () =>{
    document.querySelector('menu').classList.toggle('active')
    document.querySelector('section').classList.toggle('active')
    
})
const swiper = new Swiper('.slider',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
      },
      slidesPerView: 1,  
      slidesToShow: 1,
      height: 'auto',
    //   centeredSlides: true,
})