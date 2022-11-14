const closeBtn = document.querySelector(".close");
const openBtn = document.querySelector(".ham");
const bg = document.querySelector(".close-bg");
const menus = document.querySelectorAll(".menu-list");
const sidebarBtn = document.querySelector(".sidebar-btn");

openBtn.addEventListener("click", () => {
  bg.classList.toggle("hide");
});

closeBtn.addEventListener("click", () => {
  bg.classList.toggle("hide");
});

menus.forEach((menu) => {
  menu.addEventListener("click", function (e) {
    const element = e.target;
    let arrow = element.querySelector(".arrow");
    let list = menu.querySelector(".list-items");
    list.classList.toggle("hide");
    arrow.classList.toggle("arrow-style");
  });
});
