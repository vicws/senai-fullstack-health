import MudarContador from './mudarContador.js'

const BotaoRemoverTarefa = () => {
    const botaoRemove = document.createElement('button');

    botaoRemove.classList.add('delete-button');

    botaoRemove.innerText = 'Remover';
    botaoRemove.addEventListener('click', removerTarefa);
    return botaoRemove;
}

const removerTarefa = (evento) => {
    const botaoRemove = evento.target;

    const removerTarefa = botaoRemove.parentElement;

    // if (confirm("Tem certeza que quer remover a tarefa?")) {
        removerTarefa.remove()
        MudarContador()
        return botaoRemove

    // } else {
    //     return
    // }


}

export default BotaoRemoverTarefa