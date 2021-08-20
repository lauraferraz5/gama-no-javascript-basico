console.log("JavaScript carregado");

function validaCPF(cpf) {
  // encapsulamento do algoritmo de validação do cpf dentro de uma função
  console.log(cpf.length); // para ver quantos caracteres estão sendo digitados
  if (cpf.length != 11) {
    return false;
  } else {
    var numeros = cpf.substring(0, 9); // a partir da posição 0 quer pegar 9 caracteres. A partir de um ponto inicial e de um ponto final, a função substring() vai quebrar o texto e vai retornar somente o que foi pedido
    var digitos = cpf.substring(9); // pega do caractere 9 para frente

    var soma = 0;
    for (var i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }
    console.log(soma);

    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // Validação do primeiro dígito
    if (resultado != digitos.charAt(0)) {
      // vai pegar o valor que tiver dentro do índice 0
      return false; // quer que a operação 11 - (soma % 11) seja o mesmo número da posição 0 do digitos
    }

    console.log(
      digitos.toString().charAt(0) + " é a primeira posição da variável soma"
    ); // precisa fazer a conversão do número para string

    soma = 0; // resetar a variável soma. Como já foi declarado não precisa declarar "var" novamente
    numeros = cpf.substring(0, 10); // sobrescreve a variável numeros. Pega do primeiro caractere até o primeiro dígito verificador

    for (var k = 11; k > 1; k--) {
      soma += numeros.charAt(11 - k) * k;
    }

    console.log(soma);

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    //Validação do segundo dígito
    if (resultado != digitos.charAt(1)) {
      return false;
    }

    return true;
  }
}

function validacao() {
  console.log("Iniciando validação CPF");
  document.getElementById("success").style.display = "none";
  document.getElementById("error").style.display = "none";

  var cpf = document.getElementById("cpf_digitado").value; // o cpf digitado vai ser capturado através do JS, dentro do HTML, e vai ser armazenado nesta variável
  // console.log(cpf);

  var resultadoValidacao = validaCPF(cpf); // instrução de atribuição e com o resultado dessa função para o valor resultadoValidacao

  if (resultadoValidacao) {
    document.getElementById("success").style.display = "block"; // para exibir o quadro de sucesso quando a condição for verdadeira
  } else {
    document.getElementById("error").style.display = "block"; // para exibir o quadro de erro quando a condição for falsa
  }
}
