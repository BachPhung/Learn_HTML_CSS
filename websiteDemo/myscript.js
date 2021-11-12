
const buyBtns = document.querySelectorAll(".place-buy-btn");
const modal   = document.querySelector(".modal");
const closeBtn = document.querySelector(".model-close");
const modalContainer = document.querySelector('.modal-container')
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',()=>{
        modal.classList.add('open')
    })
}
closeBtn.addEventListener('click',()=>{
    modal.classList.remove('open')
})

modal.addEventListener('click', ()=>modal.classList.remove('open'))

modalContainer.addEventListener('click', (event)=>{
    event.stopPropagation();
})