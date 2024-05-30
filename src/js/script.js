const menu = document.querySelector(".menu2");
const itensMenu = document.querySelector(".itensDoMenu");

menu.addEventListener("click", () => {
  itensMenu.classList.toggle("ativo");
});
