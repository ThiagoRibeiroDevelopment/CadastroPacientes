var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    //Fazer um dalay para que dê tempo da execução de cima terminar
    setTimeout(function(){
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode; //TR = paciente = remover
        paiDoAlvo.remove();
    }, 500);
    //poderia ter feito event.target.parentNode.remove(); para remover

});
