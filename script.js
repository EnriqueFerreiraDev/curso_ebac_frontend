const alunos = [
    { nome: "Alice", nota: 8 },
    { nome: "Bob", nota: 5 },
    { nome: "Carol", nota: 7 },
    { nome: "David", nota: 6 },
    { nome: "Eve", nota: 9 },
  ];
  
  function alunosAprovados(arrAlunos) {
    return arrAlunos.filter(aluno => aluno.nota >= 6);
  }
  
  const alunosList = document.getElementById('alunos-list');
  
  function atualizarListaAlunos() {
    alunosList.innerHTML = '';
  
    const alunosAprovadosArray = alunosAprovados(alunos);
  
    alunos.forEach(aluno => {
      const li = document.createElement('li');
      li.textContent = `Nome: ${aluno.nome}, Nota: ${aluno.nota}`;
      
      if (alunosAprovadosArray.includes(aluno)) {
        li.classList.add('aprovado');
      }
      
      alunosList.appendChild(li);
    });
  }
  
  atualizarListaAlunos();
  