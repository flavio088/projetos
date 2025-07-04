 document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", (event) => {
      event.preventDefault();  

const primeiroNome = document.getElementById("nome").value;
const sobrenome = document.getElementById("sobrenome").value;
const campoDeEstudo = document.getElementById("campoDeEstudo").value;
const dataDeNascimento = document.getElementById("dataDeNascimento").value;

const mensagem = 
`Recruta cadastrado!\n` +
`Nome: ${primeiroNome} ${sobrenome}\n` +
`Campo de estudo: ${campoDeEstudo}\n` +
`Data de nascimento: ${dataDeNascimento}`;


alert(mensagem);

form.reset();

    });
  });