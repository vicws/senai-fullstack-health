import BotaoConcluirTarefa from './componentes/concluirTarefa.js'
import BotaoRemoverTarefa from './componentes/removerTarefa.js'
import MudarContador from './componentes/mudarContador.js'

document.onload = document.querySelector('[data-form-input]').focus();

const criarTarefa = (evento) => {

    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    let errorMessageElement = document.getElementById("error-message")



    // valida o conteúdo do input
    if (input.value.trim() == "") {
        document.getElementById("form-input").classList.add('input-failed')
        errorMessageElement.textContent = "Tarefas vazias não ajudam a memória! =P"
        input.focus();
        return;
    }


    // caso seja válido, cria o novo elemento com o texto inserido pelo usuário
    let valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluirTarefa());
    tarefa.appendChild(BotaoRemoverTarefa());
    lista.appendChild(tarefa);
    input.value = "";
    input.focus();

    document.getElementById("form-input").classList.remove('input-failed')

    errorMessageElement.textContent = "";


    MudarContador();
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);
