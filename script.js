// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        const table = document.getElementById('contact-table').querySelector('tbody');
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        row.appendChild(nameCell);
        
        const phoneCell = document.createElement('td');
        phoneCell.textContent = phone;
        row.appendChild(phoneCell);
        
        table.appendChild(row);

        document.getElementById('contact-form').reset();
        alert('Contato cadastrado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
