document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0'; 
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)'; 
        } else {
            navbar.style.padding = '15px 0'; 
            navbar.style.backgroundColor = '#000000';
        }
        
        highlightMenu();
    });

    function highlightMenu() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            

            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }


    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
  
        if (this.classList.contains('external-link')) {
            return; 
        }

        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, 
                behavior: 'smooth'
            });
        }
    });
});
                window.scrollTo({
                    top: targetSection.offsetTop - 80, 
                    behavior: 'smooth'
                });
            }
        });
    });

});