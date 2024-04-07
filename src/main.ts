import { create_header, reload_slides, reload_goods } from "./modules/ui";
import {MakeRequest} from "./modules/http"
import Swiper from "swiper/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

create_header()

const http = new  MakeRequest()

  const swiper_wrapper:HTMLElement = document.querySelector('.swiper-wrapper')
  
    const goods = document.querySelector('.goods_popular')
    const furniture = document.querySelector('.furniture')
    const pc = document.querySelector('.pc')
    const audio = document.querySelector('.audio')
    const tv = document.querySelector('.tv')
    const kitchen = document.querySelector('.kitchen')
  http.getData('/goods')
  .then(res => {
   reload_slides(res.slice(0, 10), swiper_wrapper)

   new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  reload_goods(res, goods, furniture, pc, audio, tv, kitchen )
  })