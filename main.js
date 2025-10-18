function validarLogin(event) {

    const usuarioVlaido = "admin"
    const senhaValida = "123456"


    document.getElementById("usuario")

    const usuarioInput = document.getElementById("usuario")
    const senhaInput = document.getElementById("senha")
    const mensagemErro = document.getElementById("mensagem-erro")


    if (usuarioInput.value == usuarioVlaido && senhaInput.value == senhaValida) {
        mensagemErro.textContent = "login sucesso"
        console.log("login sucesso")
        window.location.href = 'agendamento.html'

    }
    else {
        alert("Usuário ou senha incorretos.")
        mensagemErro.textContent = "Usuário ou senha incorretos.";
        mensagemErro.style.color = "red";
        console.log("Login falhou");
    }
}


