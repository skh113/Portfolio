console.log("hello");
const portfolioItemsWrapper = document.querySelectorAll (`.portfolioItem`);
portfolioItemsWrapper.forEach(portfolioItemWrapper => {
        portfolioItemWrapper.addEventListener('mouseover', () => {
            portfolioItemWrapper.childNodes[1].classList.add('darkenImage');
        })
        portfolioItemWrapper.addEventListener('mouseout', () => {
            portfolioItemWrapper.childNodes[1].classList.remove('darkenImage');
        })
})