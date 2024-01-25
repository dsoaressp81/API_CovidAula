// Função que será chamada quando o formulário for enviado
const enviarDadosDoFormulario = event => {
    // Previne o comportamento padrão do formulário, que seria recarregar a página
    event.preventDefault();

    // Obtém o valor do campo 'country' do formulário
    var country = document.getElementById('country').value;
    
    // Obtém o valor do campo 'date' do formulário
    var date = document.getElementById('date').value;

    // Chama a função fetchData (definida em outro arquivo) passando os valores dos campos 'country' e 'date'
    window.buscaDados(country, date);
}

// Adicionar evento ao botao
document.getElementById('search-form').addEventListener('submit', enviarDadosDoFormulario);


