const toggleText = document.getElementById('toggleText');
const moreText = document.getElementById('moreText');

toggleText.addEventListener('click', () => {
    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        toggleText.textContent = 'Read Less';
    }
    else {
        moreText.style.display = 'none';
        toggleText.textContent = 'Read more';
    }
});

const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('darkTheme')
});

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll',()=>{
    if(window,scrollY > 100){
        scrollToTopBtn.style.display = 'block'
    }
    else{
        scrollToTopBtn.style.display = 'none'
    }
})
scrollToTopBtn.addEventListener('click',()=>{
    window.scrollTo({top:0, behavior:'smooth'});
});
