document.getElementById('meuForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;
    const mensagem = document.getElementById('mensagem');

    if (Number(campoB) > Number(campoA)) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        mensagem.style.color = "red";
    }
});
