import { Item } from "../types"
export function create_header() {
    const header= document.createElement('header')
    const img = document.createElement('img')
    const cancel = document.createElement('img')
    const button = document.createElement('button')
    const search_place = document.createElement('div')
    const input = document.createElement('input')
    const search = document.createElement('img')
    const main = document.createElement('nav')
    const account = document.createElement('div')
    const img_2 = document.createElement('img')
    const a_1 = document.createElement('a')
    const a_2 = document.createElement('a')
    const a_3 = document.createElement('a')
    const dialog = document.createElement('dialog')
    account.className = 'account'
    search.src = '/public/svg/search.svg'
    img_2.src = '/public/svg/account.svg'
    search.className = 'search'
    input.placeholder = 'Искать товары'
    search_place.className = 'search_place'
    button.innerHTML = 'Каталог'
    a_1.innerHTML = 'Sardor'
    a_2.innerHTML = 'Избранное'
    cancel.style.display = 'none'
    a_3.innerHTML = 'Корзина'
    main.className = 'main'
    img.src = '/public/svg/cancel.svg'
    img.src = '/public/img/logo.png'
    dialog.classList.add('dialog_of_header')
    img.classList.add('logo')
    header.classList.add('header')
    account.append(img_2, a_1)
    main.append(account, a_2, a_3)
    search_place.append(input, search)
    header.append(img, button, search_place, main, cancel)
    document.body.prepend(header, dialog)
    button.onclick = () => {
        cancel.style.display = 'block'
        dialog.prepend(header)
        dialog.showModal()
    }
}
export function reload_slides (arr:Array<Item>, place:HTMLElement) {
    
    place.innerHTML = ''

    for (const item of arr) {
    
    place.innerHTML += `
        <div class="swiper-slide">
        <div class="text">
        <h1 class="title_of_product">${item.title}</h1>
        <h2 class="price">${item.price} сум</h2>
       <p class="description">${item.description.slice(0, 623)}</p>
        </div>
        <div class="yellow">
        <img src="${item.media[0]}" alt="">
        </div>
       </div>
    `
    }
}
export function reload_goods (arr:Array<Item>, place:HTMLElement, place_2:HTMLElement, place_3:HTMLElement, place_4:HTMLElement, place_5:HTMLElement, place_6:HTMLElement) {
    
    place.innerHTML = ''

    for (const item of arr) {
    if(item.rating >= 3.5){
        place.innerHTML += `
             <div class="item">
           <div class="photo">
             <img class="heart" src="/public/svg/heart 1.svg" alt="">
            <img class="main_img" src="${item.media[0]}" alt="">
          </div>
           <p class="description">${item.title.slice(0, 50)}</p>
           <p class="ex_price">${item.price} сум</p>
          <div class="flour">
            <p class="price">${item.price} сум</p>
              <img class="korzina" src="./public/svg/korzinka.svg" alt="">
          </div>
         </div>
        `
        
    } 
     if(item.type === 'furniture'){
        place_2.innerHTML += `
        <div class="item">
        <div class="photo">
          <img class="heart" src="/public/svg/heart 1.svg" alt="">
         <img class="main_img" src="${item.media[0]}" alt="">
       </div>
        <p class="description">${item.title.slice(0, 50)}</p>
        <p class="ex_price">${item.price} сум</p>
       <div class="flour">
         <p class="price">${item.price} сум</p>
           <img class="korzina" src="./public/svg/korzinka.svg" alt="">
       </div>
      </div>
        `
    } 
     if(item.type === 'PC'){
        place_3.innerHTML += `
        <div class="item">
        <div class="photo">
          <img class="heart" src="/public/svg/heart 1.svg" alt="">
         <img class="main_img" src="${item.media[0]}" alt="">
       </div>
        <p class="description">${item.title.slice(0, 50)}</p>
        <p class="ex_price">${item.price} сум</p>
       <div class="flour">
         <p class="price">${item.price} сум</p>
           <img class="korzina" src="./public/svg/korzinka.svg" alt="">
       </div>
      </div>
        `
        
    } 
     if(item.type === 'audio'){
        place_4.innerHTML += `
        <div class="item">
        <div class="photo">
          <img class="heart" src="/public/svg/heart 1.svg" alt="">
         <img class="main_img" src="${item.media[0]}" alt="">
       </div>
        <p class="description">${item.title.slice(0, 50)}</p>
        <p class="ex_price">${item.price} сум</p>
       <div class="flour">
         <p class="price">${item.price} сум</p>
           <img class="korzina" src="./public/svg/korzinka.svg" alt="">
       </div>
      </div>
        `
        
    }
    if(item.type === 'TV'){
        place_5.innerHTML += `
        <div class="item">
        <div class="photo">
          <img class="heart" src="/public/svg/heart 1.svg" alt="">
         <img class="main_img" src="${item.media[0]}" alt="">
       </div>
        <p class="description">${item.title.slice(0, 50)}</p>
        <p class="ex_price">${item.price} сум</p>
       <div class="flour">
         <p class="price">${item.price} сум</p>
           <img class="korzina" src="./public/svg/korzinka.svg" alt="">
       </div>
      </div>
        `
        
    } 
    if(item.type === 'kitchen'){
        place_6.innerHTML += `
        <div class="item">
        <div class="photo">
          <img class="heart" src="/public/svg/heart 1.svg" alt="">
         <img class="main_img" src="${item.media[0]}" alt="">
       </div>
        <p class="description">${item.title.slice(0, 50)}</p>
        <p class="ex_price">${item.price} сум</p>
       <div class="flour">
         <p class="price">${item.price} сум</p>
           <img class="korzina" src="./public/svg/korzinka.svg" alt="">
       </div>
      </div>
        `
       
    }
    }
}
