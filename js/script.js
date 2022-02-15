const swiper = new Swiper('.main-slider', {
  
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.main-slider_arrow',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
}
});

let burger = document.querySelector('.menu-burger');
let closeMenu = document.querySelector('.header_menu-close');
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
  menuMobile.style.display = 'block';
})

closeMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none';
})

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main_button-play');

buttonModal.addEventListener('click', (e) => {
  modalWindow.classList.add('active');
})

modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal_inner');

  if (!isModal) {
    modalWindow.classList.remove('active');
  }
})

const modalWindow1 = document.querySelector('.modal1');
const buttonModal1 = document.querySelector('.theimage1');

buttonModal1.addEventListener('click', (e) => {
  modalWindow1.classList.add('active1');
})

modalWindow1.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal_inner1');

  if (!isModal) {
    modalWindow1.classList.remove('active1');
  }
})

const modalWindow2 = document.querySelector('.modal2');
const buttonModal2 = document.querySelector('.theimage2');

buttonModal2.addEventListener('click', (e) => {
  modalWindow2.classList.add('active2');
})

modalWindow2.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal_inner2');

  if (!isModal) {
    modalWindow2.classList.remove('active2');
  }
})

const modalWindow3 = document.querySelector('.modal3');
const buttonModal3 = document.querySelector('.theimage3');

buttonModal3.addEventListener('click', (e) => {
  modalWindow3.classList.add('active3');
})

modalWindow3.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal_inner3');

  if (!isModal) {
    modalWindow3.classList.remove('active3');
  }
})

const modalWindow4 = document.querySelector('.modal4');
const buttonModal4 = document.querySelector('.theimage4');

buttonModal4.addEventListener('click', (e) => {
  modalWindow4.classList.add('active4');
})

modalWindow4.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal_inner4');

  if (!isModal) {
    modalWindow4.classList.remove('active4');
  }
})

const modalWindow5 = document.querySelector('.modal5');
const buttonModal5 = document.querySelector('.theimage5');

buttonModal5.addEventListener('click', (e) => {
  modalWindow5.classList.add('active5');
})

modalWindow5.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal_inner5');

  if (!isModal) {
    modalWindow5.classList.remove('active5');
  }
})

const modalWindow6 = document.querySelector('.modal6');
const buttonModal6 = document.querySelector('.theimage6');

buttonModal6.addEventListener('click', (e) => {
  modalWindow6.classList.add('active6');
})

modalWindow6.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal_inner6');

  if (!isModal) {
    modalWindow6.classList.remove('active6');
  }
})