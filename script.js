
function mostrarMensagem() {
    const mensagem = "Bem-vindo à minha página do tranalho UNINTER! Que seu dia seja ótimo,produtivo e cheio de aprendizados :).";
    document.getElementById("mensagem").textContent = mensagem;
  }
  
  window.onload = function() {
    const botao = document.getElementById("botaoMensagem");
    botao.addEventListener("click", mostrarMensagem);
  };