import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

if (document.querySelector('.catalog-banner__swiper')) {
  const catalogBannerSwiper = new Swiper('.catalog-banner__swiper', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  });
}

// CATALOG DETAIL

// catalog detail tab change
if (document.querySelector('.category-catalog__type-wrapper')) {
  const categoryList = document.querySelectorAll('.category-catalog__type');
  categoryList.forEach((item) => {
    item.addEventListener('click',  () => {
      refreshCatalogList();
      item.classList.add('active');
    });
  });
  function refreshCatalogList() {
    categoryList.forEach((el) => {
      el.classList.remove('active');
    });
  }
}

// benefits items
const benefitsItems = document.querySelectorAll('.category-benefits__item');
const benefitsTitleItems = document.querySelectorAll('.category-benefits__title-box');
benefitsTitleItems.forEach((item, ind) => {
  item.addEventListener('click', () => {
    benefitsItems[ind].classList.toggle('active');
  });
});