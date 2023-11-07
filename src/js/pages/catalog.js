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