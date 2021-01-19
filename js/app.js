const fixedBtn = document.querySelector('.fixedBtn')

fixedBtn.addEventListener('click', () => {
    fixedBtn.classList.toggle('animate__bounceIn')
})

$('.left-all-info h4 a, .nav-links h4 a, .navmobile li h4 a, .footer-links a, .footer-links-mb a, .return-title a').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash

        $('html, body').animate (
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});