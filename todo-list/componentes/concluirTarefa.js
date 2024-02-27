const BotaoConcluirTarefa = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Concluir';
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done');
    if (botaoConclui.innerText == 'Concluir'){
        return botaoConclui.innerText = 'Concluído!'
    } else {
        return botaoConclui.innerText = 'Concluir'
    }
}

export default BotaoConcluirTarefa