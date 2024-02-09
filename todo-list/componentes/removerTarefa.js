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

    removerTarefa.remove()

    return botaoRemove
}

export default BotaoRemoverTarefa