AOS.init();

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const navbarOffsetTop = navbar.offsetTop;
  
    if (window.scrollY  > navbarOffsetTop) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
});
  