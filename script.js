const tooltip = document.querySelector('.tooltip');
const share = document.querySelector('.author__share');
const tooltip__share = document.querySelector('.tooltip__share');


share.addEventListener('click', () => {
    tooltip.classList.toggle('show')
})

tooltip__share.addEventListener('click', () => {
    tooltip.classList.toggle('show')
})