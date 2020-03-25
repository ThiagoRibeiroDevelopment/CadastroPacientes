var campoFiltro = document.querySelector("#filtrar-tabela"); 
 
campoFiltro.addEventListener("input", function(){   
    console.log(this.value); 
    var pacientes = document.querySelectorAll(".paciente"); 
 
    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); //a string i serve para a rexpressao regular buscar letra maiscula e minuscula
            //abaixo !expressao ta invertento a logica para que ele esconda oq é diferente e apareça o semelhante
            if (!expressao.test(nome)) { //exressao.test testa se o pedaço da expressao é igual ao pedaço do nome
                paciente.classList.add("invisivel");
            } else { 
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
