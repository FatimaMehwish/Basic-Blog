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
