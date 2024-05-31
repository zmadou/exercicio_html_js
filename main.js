    const form = document.getElementById('form-validacao');
    const messageDiv = document.getElementById('message');

    let formValida = false;

    function numeroValido (campoA, campoB) {
        return campoB > campoA;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let campoA = parseFloat(document.getElementById('campo-a').value);
        let campoB = parseFloat(document.getElementById('campo-b').value);

        formValida = numeroValido(campoA, campoB);

        if (formValida) {
        
            messageDiv.innerText = `Formulário válido! Número B (${campoB}) é maior que o número A (${campoA}).`;
            messageDiv.classList.remove('negative'); 
            messageDiv.classList.add('positive'); 
        } else {   
            messageDiv.innerText = `Formulário inválido! Número B (${campoB}) deve ser maior que o número A (${campoA}).`;
            messageDiv.classList.remove('positive');
            messageDiv.classList.add('negative'); 
        }
    });

