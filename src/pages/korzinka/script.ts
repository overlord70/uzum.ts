import { MakeRequest } from "../../modules/http";
import { create_header } from "../../modules/ui";

create_header()

const http = new MakeRequest()

const nothing = document.querySelector('.nothing') as HTMLDivElement

const korzinka_items = document.querySelector('.korzinka_items') as HTMLDivElement

const calculator = document.querySelector('.calculator') as HTMLDivElement

const h1 = document.querySelector('h1') as HTMLParagraphElement

const korzinka_ids: string [] = JSON.parse(localStorage.getItem('korzinka_ids') ?? "[]")

const number_of_currency = document.querySelector('.number_of_currency') as HTMLParagraphElement

const overal = document.querySelector('.overal') as HTMLParagraphElement

const discount = document.querySelector('.discount') as HTMLParagraphElement

setInterval(() => {
    if(korzinka_ids.length === 0){
        nothing.style.display = 'block'
        korzinka_items.style.display = 'none'
        calculator.style.display = 'none'
        h1.style.display = 'none'
    } else {
        nothing.style.display = 'none'
    }
    overal.innerHTML = korzinka_ids.length.toString()
}, 100)

http.getData('/korzinka')
.then(res => {
    for (const iterator of res) {
        const itemDiv = document.createElement('div')
        itemDiv.className = 'item'
        itemDiv.id = iterator.id
        const bgImgDiv = document.createElement('div')
        bgImgDiv.classList.add('bg_img')

        const img = document.createElement('img')
        img.src = iterator.media[0]

        bgImgDiv.append(img)

        const textDiv = document.createElement('div')
        textDiv.classList.add('text')

        const titleHeading = document.createElement('h2')
        titleHeading.innerHTML = iterator.title.slice(0, 57)
        const priceHeading = document.createElement('h3')
        const priceSpan = document.createElement('span')
        priceSpan.classList.add('price')
        priceSpan.innerHTML = iterator.price;
        priceHeading.innerHTML = 'сум'
        priceHeading.prepend(priceSpan)
        const panelDiv = document.createElement('div')
        panelDiv.classList.add('ponel')
        const minusButton = document.createElement('button')
        const minusImg = document.createElement('img')
        minusImg.src = '/svg/minus.svg'
        minusButton.append(minusImg)
        const numberParagraph = document.createElement('p')
        numberParagraph.classList.add('number')
        numberParagraph.innerHTML = '1'
        const plusButton = document.createElement('button')
        const plusImg = document.createElement('img')
        plusImg.src = '/svg/plus.svg'
        plusButton.append(plusImg)


        panelDiv.append(minusButton, numberParagraph, plusButton)

        const deleteButton = document.createElement('button')
        deleteButton.className = 'delete'
        deleteButton.innerHTML = 'Удалить'

        textDiv.append(titleHeading, priceHeading, panelDiv, deleteButton)
        itemDiv.append(bgImgDiv, textDiv);

        korzinka_items.append(itemDiv)

        deleteButton.onclick = () => {
            itemDiv.remove()
            http.deleteData(`/korzinka/${itemDiv.id}`)
            korzinka_ids.splice(korzinka_ids.indexOf(`${itemDiv.id}`), 1)
            localStorage.setItem('korzinka_ids', JSON.stringify(korzinka_ids))
        }
        plusButton.onclick = () => {
            numberParagraph.innerHTML = (parseFloat(numberParagraph.innerHTML) + 1).toString()
            priceSpan.innerHTML = +priceSpan.innerHTML + iterator.price
            number_of_currency.innerHTML = (parseInt(number_of_currency.innerHTML) + iterator.price).toString()
        }
        minusButton.onclick = () => {
            if(+numberParagraph.innerHTML <= 1){
            itemDiv.remove()
            http.deleteData(`/korzinka/${itemDiv.id}`)
            } else {
                numberParagraph.innerHTML = (parseFloat(numberParagraph.innerHTML) - 1).toString()
                priceSpan.innerHTML = (parseFloat(priceSpan.innerHTML) - iterator.price).toString()
                number_of_currency.innerHTML = (parseInt(number_of_currency.innerHTML) - iterator.price).toString()
            }
        }
        discount.innerHTML = (parseFloat(discount.innerHTML) + iterator.price - 500).toString()
        number_of_currency.innerHTML = +number_of_currency.innerHTML + iterator.price
    }
})

