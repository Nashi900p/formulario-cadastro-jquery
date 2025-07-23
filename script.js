$(document).ready(function () {
  // Aplica máscaras
  $('#cpf').mask('000.000.000-00');
  $('#telefone').mask('(00) 00000-0000');

  // Validação e envio simulado
  $('#cadastroForm').on('submit', function (e) {
    e.preventDefault();

    const nome = $('#nome').val().trim();
    const email = $('#email').val().trim();
    const cpf = $('#cpf').val().trim();
    const telefone = $('#telefone').val().trim();

    if (!nome || !email || !cpf || !telefone) {
      $('#mensagem').text('Por favor, preencha todos os campos.').css('color', 'red');
      return;
    }

    $('#mensagem').text('Cadastro enviado com sucesso!').css('color', 'green');

    setTimeout(() => {
      $('#cadastroForm')[0].reset();
      $('#mensagem').text('');
    }, 2000);
  });
});
