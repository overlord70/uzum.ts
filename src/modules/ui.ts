import { Item } from "../types"
import { MakeRequest } from "./http"

const http = new MakeRequest()

export function create_header() {
    // a
    const header= document.createElement('header')
    const img = document.createElement('img')
    const cancel = document.createElement('img')
    const button = document.createElement('button')
    const search_place = document.createElement('div')
    const katalog = document.createElement('div')
    const input = document.createElement('input')
    const search = document.createElement('img')
    const main = document.createElement('nav')
    const account = document.createElement('div')
    const img_2 = document.createElement('img')
    const a_1 = document.createElement('a')
    const a_2 = document.createElement('a')
    const a_3 = document.createElement('a')
    const p = document.createElement('p')
    const furniture = document.createElement('h3')
    const pc = document.createElement('h3')
    const audio = document.createElement('h3')
    const tv = document.createElement('h3')
    const kitchen = document.createElement('h3')
    const flex_1 = document.createElement('div')
    const flex_2 = document.createElement('div')
    const flex_3 = document.createElement('div')
    const flex_4 = document.createElement('div')
    const flex_5 = document.createElement('div')
    const div_1 = document.createElement('div')
    const div_2 = document.createElement('div')
    const div_3 = document.createElement('div')
    const div_4 = document.createElement('div')
    const div_5 = document.createElement('div')
    const p_1 = document.createElement('p')
    const p_2 = document.createElement('p')
    const p_3 = document.createElement('p')
    const p_4 = document.createElement('p')
    const p_5 = document.createElement('p')
    const search_results = document.createElement('div')
    const p_7 = document.createElement('p')
    // b
    p_5.innerHTML = '10 товара'
    furniture.innerHTML = 'furniture'
    pc.innerHTML = 'pc'
    search_results.className = 'search_results'
    audio.innerHTML = 'audio'
    tv.innerHTML = 'tv'
    kitchen.innerHTML = 'kitchen'
    p_1.innerHTML = '10 товара'
    account.className = 'account'
    katalog.className = 'katalog'
    search.src = '/svg/search.svg'
    div_1.className = 'div'
    img_2.src = '/svg/account.svg'
    search.className = 'search'
    flex_1.className = 'flex'
    input.placeholder = 'Искать товары'
    flex_4.className = 'flex'
    search_place.className = 'search_place'
    p_2.innerHTML = '10 товара'
    button.innerHTML = 'Каталог'
    flex_2.className = 'flex'
    div_3.className = 'div'
    a_1.innerHTML = 'Sardor'
    a_2.innerHTML = 'Избранное'
    div_2.className = 'div'
    a_2.href = '/src/pages/loved/'
    flex_3.className = 'flex'
    cancel.style.display = 'none'
    a_3.innerHTML = 'Корзина'
    div_4.className = 'div'
    a_3.href = '/src/pages/korzinka/'
    main.className = 'main'
    p_4.innerHTML = '10 товара'
    div_5.className = 'div'
    cancel.src = '/svg/cancel.svg'
    flex_5.className = 'flex'
    img.src = '/img/logo.png'
    img.classList.add('logo')
    p_3.innerHTML = '10 товара'
    p_7.innerText = 'Поиск'
    header.classList.add('header')
    p.innerHTML = 'Категории товаров'
    // c
    flex_1.append(furniture, div_1)
    flex_2.append(pc, div_2)
    flex_3.append(audio, div_3)
    flex_4.append(tv, div_4)
    flex_5.append(kitchen, div_5)
    account.append(img_2, a_1)
    div_2.append(p_2)
    main.append(account, a_2, a_3)
    div_3.append(p_3)
    search_place.append(input, search)
    div_1.append(p_1)
    katalog.append(p, flex_1, flex_2, flex_3, flex_4, flex_5)
    div_5.append(p_5)
    header.append(img, button, search_place, main, cancel)
    div_4.append(p_4)
    search_results.prepend(p_7)
    document.body.prepend(header,  katalog, search_results)
    // d
    img.onclick = () => {
      location.assign('/')
    }
    input.onblur = () => {
      setTimeout(() => {
        search_results.classList.remove('non_active_k')
        input.value = ''
        search_results.innerHTML = ''
      }, 1000);
    }
    input.onfocus = () => {
      search_results.classList.add('non_active_k')
    }
    input.onkeyup = () => {
      
      http.getData('/goods')
      .then(res => {
        search_results.innerHTML = ''
        res.forEach((element:any) => {
          if(element.title.toLowerCase().includes(input.value.toLowerCase())){
            if(input.value !== ''){
              const h4 = document.createElement('h4')
              h4.id = element.id
              h4.innerHTML = element.title
              search_results.prepend(p_7)
              search_results.appendChild(h4)
              h4.onclick = () => {
                localStorage.setItem('chosen_item', h4.id)
                location.assign('/src/pages/chosen_item/')
              }
            }
          }
        })
      })
    }
    
    
   

    button.onclick = () => {
      katalog.classList.toggle('non_active_k')
     }
}

export function reload_slides (arr:Array<Item>, place:HTMLDivElement ) {
    
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
export function reload_goods (arr:Array<Item>, place:HTMLDivElement) {

  
  const korzinka_ids: string[] = JSON.parse(localStorage.getItem('korzinka_ids') ?? "[]")
   const carts_ids: string[] = JSON.parse(localStorage.getItem('carts_ids') ?? "[]")
    place.innerHTML = ''
  
  for (const item of arr) {
      // a
      const item_container = document.createElement("div")
      const photo_container = document.createElement("div")
      const heart_icon = document.createElement("img")
      const main_image = document.createElement("img")
      const description = document.createElement("p")
      const ex_price = document.createElement("p")
      const flour_container = document.createElement("div")
      const price = document.createElement("p")
      const korzina_icon = document.createElement("img")
      // b
      item_container.classList.add("item")
      photo_container.classList.add("photo")
      heart_icon.classList.add("heart")
      heart_icon.src = "/svg/heart 1.svg"
      main_image.id = `${item.id}`
      main_image.classList.add("main_img")
      main_image.src = `${item.media[0]}`
      description.classList.add("description")
      description.innerHTML = item.title.slice(0, 55)
      ex_price.classList.add("ex_price")
      ex_price.innerHTML = `${item.price} сум` 
      flour_container.classList.add("flour")
      price.classList.add("price")
      price.innerHTML = `${item.price} сум` 
      korzina_icon.classList.add("korzina")
      korzina_icon.src = "/svg/korzinka.svg"

      // c
      photo_container.append(heart_icon,  main_image)
      flour_container.append(price, korzina_icon)
      item_container.append(photo_container, description, ex_price, flour_container)
      place.append(item_container)
      // d
    heart_icon.onclick = () => {
      if(carts_ids.includes(`${item.id}`)){
        heart_icon.src = "/svg/heart 1.svg"
        carts_ids.splice(carts_ids.indexOf(`${item.id}`), 1)
        localStorage.setItem('carts_ids', JSON.stringify(carts_ids));
        http.deleteData(`/loved/${item.id}`)
      } else {
        carts_ids.push(`${item.id}`);
        localStorage.setItem('carts_ids', JSON.stringify(carts_ids));
        heart_icon.src = '/svg/liked.svg'
        http.postData('/loved', item)
      }
    }
      if(carts_ids.includes(main_image.id)) {
        heart_icon.src = '/svg/liked.svg'
    }
      if(korzinka_ids.includes(main_image.id)) {
        korzina_icon.src = '/svg/basket_active.svg'
    }
    
    main_image.onclick = () => {
      localStorage.setItem('chosen_item', main_image.id)
      location.assign('/src/pages/chosen_item/')
    }

    korzina_icon.onclick = () => {
      if(korzinka_ids.includes(`${item.id}`)){
        korzina_icon.src = "/svg/korzinka.svg"
        korzinka_ids.splice(korzinka_ids.indexOf(`${item.id}`), 1)
        localStorage.setItem('korzinka_ids', JSON.stringify(korzinka_ids))
        http.deleteData(`/korzinka/${item.id}`)
      } else {
        korzinka_ids.push(`${item.id}`)
        localStorage.setItem('korzinka_ids', JSON.stringify(korzinka_ids))
        korzina_icon.src = '/svg/basket_active.svg'
        http.postData('/korzinka', item)
      }
    }

  }
}
