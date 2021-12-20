let menu =  document.querySelector(".menu-icon")
let menulist = document.querySelector(".menu")
let navigation = document.querySelector('nav')
menulist.style.maxHeight = '0px'

menu.addEventListener('click', Toggle)

window.addEventListener('scroll', Toggle)

function Toggle(){
  if(menulist.style.maxHeight == '0px') {
    menulist.style.maxHeight = '50rem';
  } else {
    menulist.style.maxHeight = '0px';
  }
}