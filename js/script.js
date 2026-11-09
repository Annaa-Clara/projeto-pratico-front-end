document.addEventListener("DOMContentLoaded", () => {

  const titulos = [
    { nome: "Interestelar", nota: 9 },
    { nome: "Breaking Bad", nota: 9.5 },
    { nome: "Divertida Mente", nota: 8 },
    { nome: "Dark", nota: 8.5 },
  ];

  function calcularMedia(listaDeTitulos) {
    if (listaDeTitulos.length === 0) {
      return 0;
    }
    let somaDasNotas = 0;
    for (const titulo of listaDeTitulos) {
      somaDasNotas += titulo.nota;
    }
    return somaDasNotas / listaDeTitulos.length;
  }

  const campoMedia = document.getElementById("media-notas");
  campoMedia.textContent = calcularMedia(titulos).toFixed(1).replace(".", ",");

  function lerDoStorage(chave) {
    try {
      const valorSalvo = localStorage.getItem(chave);
      return valorSalvo ? JSON.parse(valorSalvo) : [];
    } catch (erro) {
      return [];
    }
  }

  function salvarNoStorage(chave, valor) {
    localStorage.setItem(chave, JSON.stringify(valor));
  }

  const CHAVE_FAVORITOS = "cinelista-favoritos";
  const gradeFilmes = document.querySelector(".grade-filmes");
  let idsFavoritos = lerDoStorage(CHAVE_FAVORITOS);

  function atualizarBotaoFavorito(card) {
    const botao = card.querySelector(".btn-favorito");
    const ehFavorito = idsFavoritos.includes(card.dataset.id);

    botao.textContent = ehFavorito ? "★ Favorito" : "☆ Favoritar";
    botao.setAttribute("aria-pressed", String(ehFavorito));
    card.classList.toggle("favorito", ehFavorito);
  }

  gradeFilmes.querySelectorAll(".card-filme").forEach(atualizarBotaoFavorito);

  gradeFilmes.addEventListener("click", (evento) => {
    const botaoClicado = evento.target.closest(".btn-favorito");
    if (!botaoClicado) {
      return;
    }

    const card = botaoClicado.closest(".card-filme");
    const idDoTitulo = card.dataset.id;

    if (idsFavoritos.includes(idDoTitulo)) {
      idsFavoritos = idsFavoritos.filter((id) => id !== idDoTitulo);
    } else {
      idsFavoritos.push(idDoTitulo);
    }

    salvarNoStorage(CHAVE_FAVORITOS, idsFavoritos);
    atualizarBotaoFavorito(card);
  });

  const CHAVE_SUGESTOES = "cinelista-sugestoes";
  const formulario = document.querySelector("#contato form");
  const listaSugestoes = document.getElementById("lista-sugestoes");
  let sugestoes = lerDoStorage(CHAVE_SUGESTOES);

  function exibirSugestao(sugestao) {
    const item = document.createElement("li");
    
    item.textContent = `${sugestao.titulo} (sugerido por ${sugestao.nome})`;
    listaSugestoes.appendChild(item);
  }

  sugestoes.forEach(exibirSugestao);

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const novaSugestao = {
      nome: formulario.nome.value.trim(),
      titulo: formulario.titulo.value.trim(),
    };

    sugestoes.push(novaSugestao);
    salvarNoStorage(CHAVE_SUGESTOES, sugestoes);
    exibirSugestao(novaSugestao);
    formulario.reset();
  });
});