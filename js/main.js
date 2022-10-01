const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:true,


  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  
    // Navigation arrows
  
  
    // And if we need scrollbar
 scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.main_nav');
let tabBtns = document.querySelectorAll('.menu_tabs__btn')
let tabs = document.querySelectorAll('.tab')
let listsCap = document.querySelectorAll('.dropdown_list__title')
let overlay = document.querySelector('.overlay')
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  overlay.classList.toggle('active')
})
document.addEventListener("click",function(event){
  if(event.target.dataset.type=="btn"){
    tabBtns.forEach((elem)=>{
      elem.classList.remove("active")
    })
    tabs.forEach(elem=>{
      if(elem.dataset.tab==event.target.dataset.link){
        elem.classList.add('active')
      }else{
        elem.classList.remove('active')
        
      }
    })
    event.target.classList.add("active")
  }
  if(event.target.dataset.type=="cap"){
   
    document.querySelectorAll('.dropdown_list__items-wrapper').forEach(elem=>{
      if(elem.dataset.list==event.target.dataset.list){
        elem.classList.toggle('active')
        event.target.classList.toggle('active')
      }else{
        elem.classList.remove('active')
        
      }
    })
  }
  if(event.target.dataset.type=="overlay"){
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active')
  }
   

  
})
