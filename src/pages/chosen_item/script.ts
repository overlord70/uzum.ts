import { MakeRequest } from "../../modules/http";
import { create_header, reload_goods } from "../../modules/ui";
import Swiper from "swiper/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
create_header()

const chosen_item = JSON.parse(localStorage.getItem('chosen_item'))

const http = new MakeRequest()

const inf = document.querySelector('.inf')

const description = document.querySelector('.description p')

const img = document.querySelector('.swiper-wrapper')

const similar_goods = document.querySelector('.similar_goods')

let item_type :any 


http.getData('/goods?id=' + chosen_item)
.then(res => {
    for (const item of res) {
        // a
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const span = document.createElement('span');
        const span_2 = document.createElement('span');
        const minus = document.createElement('button');
        const plus = document.createElement('button');
        const img_minus = document.createElement('img');
        const img_plus = document.createElement('img');
        const span_num = document.createElement('span');
        const ponel = document.createElement('div')
        const hr = document.createElement('hr');
        const p = document.createElement('p');
        const btns = document.createElement('div');
        const btn_cart = document.createElement('button');
        const btn_favorites = document.createElement('button');
        // b
        h1.innerHTML = item.title;
        span_2.innerHTML = `${item.price} `;
        h2.innerHTML = 'сум'
        span.innerHTML = `${item.price} сум`;
        img_minus.src = '/public/svg/minus.svg'
        img_plus.src = '/public/svg/plus.svg'
        span_num.innerHTML = '1';
        p.innerHTML = `Станьте востребованным разработчиком. Вы изучите основы программирования и основные концепции компьютерных наук, цифровые технологии, операционные системы, программное обеспечение, базы данных, системы аналитики, языки программирования и многое другое. Познакомитесь с тестированием и системным анализом. На программе сможете сделать осознанный выбор специализации и технологий, прокачаться в выбранном направлении.`;
        btn_cart.innerHTML = 'Добавить в корзину';
        btn_favorites.innerHTML = 'Добавить в избранное';
        btn_cart.classList.add('active_btn')
        minus.id =  'minus'
        plus.id =  'plus'
        span.classList.add('ex-price');
        ponel.classList.add('ponel')
        btns.classList.add('btns')
        minus.classList.add('symbol');
        plus.classList.add('symbol');
        minus.classList.add('active_btn');
        // c
        h2.prepend(span_2)
        h2.append( span);
        minus.append(img_minus)
        plus.append(img_plus)
        ponel.append(minus, span_num, plus)
        btns.append(btn_cart, btn_favorites);
        inf?.append(h1, h2, ponel, hr, p, btns);
        // d
        item.media.forEach(elem => {
            const div = document.createElement('div')
            const img_2 = document.createElement('img')
            div.className = 'swiper-slide'
            img_2.src = elem
            div.append(img_2)
            img.prepend(div)
        })
        description.innerHTML = item.description
        item_type = item.type
        plus.onclick = () => {
            +span_num.innerHTML++
            span_2.innerHTML = +span_2.innerHTML + item.price
        }
        minus.onclick = () => {
            if(+span_num.innerHTML <= 1){
                location.assign('/')
            } else {
                +span_num.innerHTML--
                span_2.innerHTML -= item.price
            }
        }
    }

})



     setTimeout(() => {
        new Swiper(' .swiper', {
        
            direction: 'horizontal',
            loop: true,
            
          
            
            pagination: {
              el: '.swiper-pagination',
            },
          
            
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          });
     }, 20);

     setTimeout(() => {
        http.getData('/goods?type=' + item_type)
     .then(res => {
        reload_goods(res, similar_goods)
     })
     }, 27);
     

     
     