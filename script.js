const menu = document.getElementById("menu-icon")
const nav = document.querySelector('nav')
const ul = document.querySelector('nav ul')
const list = document.querySelectorAll('nav li a')


menu.addEventListener("click", () => {
  if (menu.src.includes("icon-menu.svg")) {
    menu.src = "assets/icon-menu-close.svg";
  } else {
    menu.src = "assets/icon-menu.svg";
  }
  nav.classList.toggle('active')
  ul.classList.toggle('active')
  list.forEach((li) => {
    li.classList.toggle('active')
  })


});