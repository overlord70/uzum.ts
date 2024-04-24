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
    
  http.getData('/goods')
  .then(res => {
   reload_slides(res.slice(0, 20), swiper_wrapper)

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
  })
  const types = document.querySelectorAll('.type_of_item')

  const pushed = []

  http.getData('/goods')
  .then(res => {
    res.forEach(item => {
      if(item.rating >= 4){
        pushed.push(item)
        reload_goods(pushed, goods)
      }
    })
  })
  types.forEach(elem=> {
    http.getData('/goods?type=' + elem.id)
    .then(res => reload_goods(res, elem))
  } )