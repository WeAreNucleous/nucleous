//   js defined for navbar of nucleous 

const hamburger = document.querySelector('.hamburger')
const ham1 = document.querySelector('.ham-1')
const ham2= document.querySelector('.ham-2')
const ham3 = document.querySelector('.ham-3')
const nav_ul = document.querySelector('.nav-ul')

// function to toggle classes so as changing the state of navbar and hamburger : 
const  changeStateOfHam = (ham1, ham2 ,ham3, ul)=>{ 
    ham1.classList.toggle('active-ham1')
    ham2.classList.toggle('active-ham2')
    ham3.classList.toggle('active-ham3')
    ul.classList.toggle('active-ul')
}

// listening to the events

hamburger.addEventListener('click', ()=>{
    changeStateOfHam(ham1, ham2, ham3, nav_ul)
})