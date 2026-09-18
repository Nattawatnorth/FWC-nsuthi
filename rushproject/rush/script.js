document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // navbar หดลงเมื่อเลื่อนหน้าลง
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

    // ไฮไลต์เมนูตาม section ที่กำลังดูอยู่
    function highlightMenu() {
        let current = '';

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');

            // ข้ามลิงก์ที่ไปหน้าอื่น
            if (!href.startsWith('#')) {
                return;
            }

            link.classList.remove('active');

            if (current && href === '#' + current) {
                link.classList.add('active');
            }
        });
    }
});
