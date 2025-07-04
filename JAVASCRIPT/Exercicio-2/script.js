
    const form = document.getElementById("calculadoraForm");

    form.addEventListener("submit", (event) => {
      event.preventDefault(); // impede recarregar a página

      const numero1 = parseFloat(document.getElementById("numero1").value);
      const numero2 = parseFloat(document.getElementById("numero2").value);
      const operacao = document.getElementById("operacao").value;

      // 4. Calcula
      let resultado;
      switch (operacao) {
        case "soma":
          resultado = numero1 + numero2;
          break;
        case "subtracao":
          resultado = numero1 - numero2;
          break;
        case "multiplicacao":
          resultado = numero1 * numero2;
          break;
        case "divisao":
          resultado = numero2 !== 0 ? numero1 / numero2 : "Erro: divisão por zero";
          break;
        default:
          resultado = "Operação inválida";
      }

      // 5. Exibe o resultado na página
      document.getElementById("resultado").textContent = `Resultado: ${resultado}`;

      // 6. Limpa os campos
      form.reset();
    });