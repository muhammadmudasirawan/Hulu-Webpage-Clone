const modal = document.querySelector('.modal')
const loginbtn = document.querySelector('.loginbtn')
const closeBtn = document.querySelector('.close')

loginbtn.addEventListener('click' , openModal)
closeBtn.addEventListener('click' , closeModal)
Window.addEventListener('click' , outsideClick)


function openModal (){
    modal.style.display = 'block'
}

function closeModal(){
    modal.style.display ='none'

}
function outsideClick(e) {
     if(e.target == modal){
      closeModal()
     }
}