const burgerBtn = document.querySelector('.burger-btn')

burgerBtn.addEventListener('click', () => {
    const ulElements = document.querySelector('.elements')
    if (!ulElements.classList.contains('active')) {
        ulElements.classList.add('active')
    } else {
        ulElements.classList.remove('active')
    }
})