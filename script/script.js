const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close')
// this condition to check whether the barger element is there or not
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('right')
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('right');
    })
}

