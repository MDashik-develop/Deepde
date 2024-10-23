/************************ start sidebar ************************/
document.addEventListener('DOMContentLoaded', function() {
    const sidebarDiv = document.getElementById('sidebar-div');
    const menusIcons = document.querySelectorAll('.menus-icon');

    const toggleSidebar = () => {
        sidebarDiv.classList.toggle('sidebar-div-active');
        document.querySelector('.main').classList.toggle('main-div-active');
    };

    menusIcons.forEach(icon => {
        icon.addEventListener('click', toggleSidebar);
    });

    document.addEventListener('click', function(event) {
        if (sidebarDiv.classList.contains('sidebar-div-active') && 
            !sidebarDiv.contains(event.target) && 
            !Array.from(menusIcons).some(icon => icon.contains(event.target))) {
            sidebarDiv.classList.remove('sidebar-div-active');
            document.querySelector('.main').classList.remove('main-div-active');
        }
    });
});
/************************ end sidebar ************************/
/************************ start slider app card ************************/
function mvraps() {
    const container = document.querySelector('.app-slider');
    container.scrollBy({
        left: 280, 
        behavior: 'smooth'
    });
}

function mvlaps() {
    const container = document.querySelector('.app-slider');
    container.scrollBy({
        left: -280,
        behavior: 'smooth'
    });
}

/************************ end slider app card ************************/

/************************ start slider video ************************/
function moveRight() {
    const container = document.querySelector('.video-slider'); 
    container.scrollBy({
        left: 200, 
        behavior: 'smooth'
    });
}

function moveLeft() {
    const container = document.querySelector('.video-slider');
    container.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

/************************ end slider video ************************/
/************************ start slider shops ************************/
function moveRightShop() {
    const container = document.querySelector('.shop-productds'); 
    container.scrollBy({
        left: 200, 
        behavior: 'smooth'
    });
}

function moveLeftShop() {
    const container = document.querySelector('.shop-productds');
    container.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

/************************ end slider shops ************************/

/************************ start slider suggest card ************************/
function moverightSusgtCard() {
    const container = document.querySelector('.suggest-card-dev'); 
    container.scrollBy({
        left: 200, 
        behavior: 'smooth'
    });
}

function moveleftSusgtCard() {
    const container = document.querySelector('.suggest-card-dev');
    container.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

/************************ end slider suggest card ************************/
/************r-************ start result animation ************************/
function animateElement(element) {
    var tl = gsap.timeline();

    tl.from(element, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 1,
        behavior: 'smooth'
    });

}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateElement(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.01
});

const elementsToAnimate = document.querySelectorAll('.result-dev, .apps-slider-main-div, .video-slider-main-dev, .result-maps-div');
elementsToAnimate.forEach(element => observer.observe(element));

/************************ end result animation ************************/
/************************ start shop price range ************************/
const priceRange = document.getElementById('priceRange');
const priceDisplay = document.getElementById('priceDisplay');

priceRange.addEventListener('input', function() {
    const value = priceRange.value;
    priceDisplay.textContent = `$${value} - $300`;
});

/************************ end shop price range ************************/
/************************ start shop menu  ************************/
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.ctgy-ul > li > a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            
            // Hide all sub-menus
            const allSubMenus = document.querySelectorAll('.sub-menu');
            allSubMenus.forEach(menu => {
                if (menu !== this.nextElementSibling) {
                    menu.style.display = 'none';
                    menu.style.transition = 'opacity 1s ease, visibility 1s ease';
                }
            });

            // Toggle the clicked sub-menu
            const subMenu = this.nextElementSibling;
            subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
        });
    });
});
/************************ end shop menu  ************************/