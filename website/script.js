document.addEventListener("DOMContentLoaded", function () {
  // Exibir data atual
  const currentDateElement = document.getElementById("currentDate");
  const currentDate = new Date();
  currentDateElement.textContent = currentDate.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Contador de cliques
  let clickCount = 0;
  const clickCountElement = document.getElementById("clickCount");

  // Lista de itens
  const itemList = document.getElementById("itemList");
  let itemId = 1;

  // Botão de mudar cor
  const changeColorBtn = document.getElementById("changeColorBtn");
  changeColorBtn.addEventListener("click", function () {
    const colors = ["#f4f4f4", "#ffe6e6", "#e6f7ff", "#f0e6ff", "#e6ffe6"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    // Incrementar contador
    clickCount++;
    clickCountElement.textContent = clickCount;
  });

  // Botão de adicionar item
  const addItemBtn = document.getElementById("addItemBtn");
  addItemBtn.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.innerHTML = `Item ${itemId} <span class="delete-item">✕</span>`;

    // Adicionar evento para remover item
    newItem
      .querySelector(".delete-item")
      .addEventListener("click", function () {
        itemList.removeChild(newItem);
      });

    itemList.appendChild(newItem);
    itemId++;

    // Incrementar contador
    clickCount++;
    clickCountElement.textContent = clickCount;
  });

  // Botão de resetar
  const resetBtn = document.getElementById("resetBtn");
  resetBtn.addEventListener("click", function () {
    // Resetar cor de fundo
    document.body.style.backgroundColor = "#f4f4f4";

    // Limpar lista de itens
    itemList.innerHTML = "";
    itemId = 1;

    // Resetar contador
    clickCount = 0;
    clickCountElement.textContent = clickCount;

    // Incrementar contador (este clique)
    clickCount++;
    clickCountElement.textContent = clickCount;
  });
});
