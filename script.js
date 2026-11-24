const menuIcon=document.querySelector('menu-Icon');
const navLinks=document.querySelector("nav-links")

menuIcon.oneclick=()=>{
    navLinks.classList.toggle('active');
}