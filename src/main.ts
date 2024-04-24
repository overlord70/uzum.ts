import { create_header, reload_slides, reload_goods } from "./modules/ui";
import {MakeRequest} from "./modules/http"
import Swiper from "swiper/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Item } from "./types";

create_header()

const http = new  MakeRequest()

  const swiper_wrapper = document.querySelector('.swiper-wrapper') as HTMLDivElement
  
    const goods = document.querySelector('.goods_popular') as HTMLDivElement
    
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

  const pushed:Array<Item> = []
  
  http.getData('/goods')
  .then(res => {
    res.forEach((item:Item) => {
      if(item.rating >= 4){
        pushed.push(item)
        reload_goods(pushed, goods)
      }
    })
  })
  types.forEach(elem => {
   const container =  elem  as HTMLDivElement
    http.getData('/goods?type=' + elem.id)
    .then(res => reload_goods(res, container))
  } )