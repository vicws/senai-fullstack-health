const ChangeCounter = () => {
    let counter = document.getElementById("task-amount")
    let taskAmount = document.getElementsByTagName('li').length

    if (taskAmount == 0) {
        counter.innerText = "Você está sem tarefas na lista. Que tal adicionar algo?"
        return;
    }

    counter.innerText = `Você tem ${taskAmount} tarefas na lista.`
}

export default ChangeCounter