const tarefaInput = document.getElementById("tarefaInput");
const adicionarBtn = document.getElementById("adicionarBtn");
const listaTarefas = document.getElementById("listaTarefas");

adicionarBtn.addEventListener("click", function () {
  const textoTarefa = tarefaInput.value.trim();

  if (textoTarefa === "") {
    alert("Digite uma tarefa.");
    return;
  }

  const novoItem = document.createElement("li");
  novoItem.textContent = textoTarefa;

  listaTarefas.appendChild(novoItem);

  tarefaInput.value = "";
  tarefaInput.focus();
});

listaTarefas.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});
