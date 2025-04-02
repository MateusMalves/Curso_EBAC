const alunos = [
  { nome: "João", nota: 5.8 },
  { nome: "Maria", nota: 7.2 },
  { nome: "Pedro", nota: 6.0 },
  { nome: "Ana", nota: 4.5 },
  { nome: "Carla", nota: 8.5 }
];

/**
 * Filtra alunos com base em um critério de aprovação.
 * @param {Array<{nome: string, nota: number}>} listaAlunos - Lista de alunos.
 * @param {number} notaMinima - Nota mínima para aprovação.
 * @returns {Array<{nome: string, nota: number}>} Lista de alunos aprovados.
 */
function filtrarAprovados(listaAlunos, notaMinima = 6) {
  if (!Array.isArray(listaAlunos)) {
    throw new Error("O parâmetro listaAlunos deve ser um array.");
  }
  return listaAlunos.filter(aluno => aluno.nota >= notaMinima);
}

const aprovados = filtrarAprovados(alunos, 6);
console.log("Alunos aprovados:");
console.table(aprovados);

// Exibe os alunos aprovados na página
document.addEventListener("DOMContentLoaded", () => {
  const resultadoDiv = document.getElementById('resultado');
  if (aprovados.length > 0) {
    const lista = document.createElement('ul');
    aprovados.forEach(aluno => {
      const item = document.createElement('li');
      item.textContent = `${aluno.nome} - Nota: ${aluno.nota}`;
      lista.appendChild(item);
    });
    resultadoDiv.innerHTML = ""; // Limpa o texto "Carregando..."
    resultadoDiv.appendChild(lista);
  } else {
    resultadoDiv.textContent = "Nenhum aluno aprovado.";
  }
});
