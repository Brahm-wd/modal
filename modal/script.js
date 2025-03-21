const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.show-modal')
const overlay = document.querySelector('.overlay')
const closeModal = document.querySelector('.close-modal')

    
modalBtn.addEventListener('click', function () {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
})
    


closeModal.addEventListener('click', function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')

})
overlay.addEventListener('click', function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

