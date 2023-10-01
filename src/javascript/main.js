//selecionando botões
const buttons = document.querySelectorAll(".button"); //pegando elementos com a class button

//selecionando personagens
const characters = document.querySelectorAll(".character-content");

//percorrendo cada button
buttons.forEach((button, index) => {
  //disparando a ação - é executado quando o button é clicado
  button.addEventListener("click", () => {
    removeButtonClass();

    //adicionando a class active no button
    button.classList.add("active");

    removeCharacterClass();

    //adicionando class active no personagem
    characters[index].classList.add("active");
  });
});

//verificando se há algum botão selecionado e removendo a seleção
function removeCharacterClass() {
  const characterActive = document.querySelector(".character-content.active");
  characterActive.classList.remove("active");
}

//verificando se há algum personagem selecionado e removendo a seleção
function removeButtonClass() {
  const buttonActive = document.querySelector(".button.active");
  buttonActive.classList.remove("active");
}
