const MudarContador = () => {
    let contador = document.getElementById("task-amount")
    let quantidadeDeTarefas = document.getElementsByTagName('li').length

    if(quantidadeDeTarefas == 0){ 
        contador.innerText = "Você está sem tarefas na lista. Que tal adicionar algo?"
        return;
    }

    contador.innerText = `Você tem ${quantidadeDeTarefas} tarefas na lista.`
}

export default MudarContador