function myTest() {
  /*=============== SHOW SCROLL UP ===============*/


  // const scrollUp = () => {


  //   try {


  //     const scrollUp = document.getElementById('scroll-up')

  //     this.scrollY >= 350 ? scrollUp.style.display = "block"
  //       : scrollUp.style.display = "none";


  //   } catch (error) {
  //     console.log('This is Error Ignore');
  //   }
  // }


  // window.addEventListener('scroll', scrollUp)

}

// function myNav(){
//    //Show - Hide Navbar
//    const menu = document.querySelector(".nav__menu");
//    const menuBtn = document.querySelector("#open-menu-btn");
//    const closeBtn = document.querySelector("#close-menu-btn");

//    menuBtn.addEventListener('click',()=>{
//          menu.style.display = "flex";
//          closeBtn.style.display = "inline-block";
//          menuBtn.style.display = "none";
//    });

//    const navClose = () =>{
//      menu.style.display = "none";
//      closeBtn.style.display = "none";
//      menuBtn.style.display = "inline-block";
//    }

//    closeBtn.addEventListener('click',navClose);
// }


function myDemo() {



  //Change Navbar Style on Scroll

  window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',
      window.scrollY > 50);
  });

  //Show - Hide FAQs Answers

  const faqs = document.querySelectorAll('.faq');

  // console.log(faqs);

  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('open');

      const ficon = faq.querySelector('.faq__icon i');

      if (ficon.className == 'ri-add-line') {
        ficon.className = "ri-subtract-line";
      }
      else {
        ficon.className = "ri-add-line";
      }

    })
  })

  // //Show - Hide Navbar
  const menu = document.querySelector(".nav__menu");
  const menuBtn = document.querySelector("#open-menu-btn");
  const closeBtn = document.querySelector("#close-menu-btn");

  menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
  });

  const navClose = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
  }

  closeBtn.addEventListener('click', navClose);

  /*=============== SCROLL REVEAL ANIMATION ===============*/



  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset:true  /* Animations Repeat*/
  })


  sr.reveal(`.header__container .header__left`, { origin: 'bottom', interval: 100 })
  sr.reveal(`.header__container .header__right`, { delay: 600, origin: 'top', interval: 100 })

  sr.reveal(`.categories__container .categories__left, .achi__container .achi__container-left, .contact__aside`, { origin: 'left', interval: 100 })
  sr.reveal(`.categories__container .categories__right, .achi__container .achi__container-right, .contact__form`, { origin: 'right', interval: 100 })

  sr.reveal(`.courses__container,.faqs__container,.testimonial__container,.footer__container,.team__container`, { interval: 100 })





  // <!-- Initialize Swiper -->
  //   <script>
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //When Window Width is >=600px
    breakpoints: {
      600: {
        slidesPerView: 2,
      }
    }

  });
  //   </script>


}