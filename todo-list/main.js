import BotaoConcluirTarefa from './componentes/concluirTarefa.js'
import BotaoRemoverTarefa from './componentes/removerTarefa.js'

document.onload = document.querySelector('[data-form-input]').focus();
const criarTarefa = (evento) => {
    
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    if (input.value.trim() != ""){
    let valor = input.value;
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    
    const conteudo = `<p class="content">${valor}</p>`;
    
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluirTarefa());
    tarefa.appendChild(BotaoRemoverTarefa());
    lista.appendChild(tarefa);
    input.value = "";
    } else {
        alert("Tarefas em branco não ajudam a memória =P")
    }
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);
