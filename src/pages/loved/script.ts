import { MakeRequest } from "../../modules/http";
import { create_header, reload_goods } from "../../modules/ui";

create_header()

const http = new MakeRequest()

const nothing = document.querySelector('.nothing')

const loved_items = document.querySelector('.loved_items')

const h1 = document.querySelector('h1')

http.getData('/loved')
.then(res => {
    if(res.length === 0){
        nothing.style.display = 'block'
        h1.style.display = 'none'
    } else {
        nothing.style.display = 'none'
        reload_goods(res, loved_items)
    }
})