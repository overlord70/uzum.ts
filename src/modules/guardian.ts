const user = localStorage.getItem('user')

if(!user){
    location.assign('/pages/sign_in/')
}