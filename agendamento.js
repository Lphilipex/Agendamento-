
function validarIdade() {
    const campoIdade = document.getElementById("idade");
    if (!campoIdade) return;

    campoIdade.addEventListener("blur", function () {
        let valor = parseInt(this.value, 10);

        if (isNaN(valor) || valor < 0) {
            this.value = 0;
        } else if (valor > 120) {
            this.value = 120;
            alert("IDADE MÁXIMA: 120");
        }
    });
}


function validaData() {
    const campoData = document.getElementById("data");
    if (!campoData) return;

    campoData.addEventListener("blur", function () {//Adiciona um evento de saída de foco (blur), ou seja, quando o usuário termina de digitar e sai do campo.
        const valor = this.value;
        if (!valor) return;

        const dataDigitada = new Date(valor + "T00:00:00");
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        if (dataDigitada < hoje) {
            alert("A data é anterior à data atual.");
            this.value = "";
        }
    });
}







// 

function salvarconsulta(event) {
    
    event.preventDefault()

    //evitar o envio padrãod o formulario
    event.preventDefault()

    //COLETAR OS DADOS DO FROMULARIO 
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const idade = document.getElementById("idade").value
    const data = document.getElementById("data").value
    const hora = document.getElementById("hora").value
    const especialidade = document.getElementById("especialidade").value
    const conveniado = document.querySelector("input[name='conveniado']:checked").value
    const servicoSelecionados = document.querySelectorAll("input[name='servico']:checked")
    const servico = Array.from(servicoSelecionados).map(x => x.value)
    const sintomas = document.getElementById("sintomas").value
    const medico = document.getElementById("medico").value



    //criar o meu objeto 
    const consulta = {
        nome,
        email,
        telefone,
        idade,
        data,
        hora,
        especialidade,
        conveniado,
        servico,
        sintomas,
        medico

    }
    //armazenar em local storage os dados do cadastro 
    
    localStorage.setItem("consultaCadastrada", JSON.stringify(consulta))
    alert("Consulta efetuado com sucesso!!")
    console.log(consulta);

}

    window.addEventListener("DOMContentLoaded", function () {
        validarIdade();
        validaData();
       

    });

