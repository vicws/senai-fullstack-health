import CompleteTaskButton from './components/completeTask.js'
import RemoveTaskButton from './components/deleteTask.js'
import ChangeCounter from './components/changeCounter.js'
import storedTasks from './json/list.json' assert {type: 'json'}

document.onload = () => {
    // Carregar tarefas salvas do localStorage durante a inicialização
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const lista = document.querySelector('[data-list]');

    // Adicionar tarefas salvas à lista
    tarefasSalvas.forEach((tarefaObj) => {
        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        const conteudo = `<p class="content">${tarefaObj.texto}</p>`;
        tarefa.innerHTML = conteudo;

        if (tarefaObj.concluida) {
            tarefa.classList.add('task-concluida');
        }

        tarefa.appendChild(BotaoConcluirTarefa());
        tarefa.appendChild(BotaoRemoverTarefa());
        lista.appendChild(tarefa);
    });

    MudarContador();
};

const criarTarefa = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const errorMessageElement = document.getElementById("error-message");

    if (input.value.trim() == "") {
        document.getElementById("form-input").classList.add('input-failed');
        errorMessageElement.textContent = "Tarefas vazias não ajudam a memória! =P";
        input.focus();
        return;
    }

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

    document.getElementById("form-input").classList.remove('input-failed');
    errorMessageElement.textContent = "";

    // Salvar a lista de tarefas no localStorage
    salvarLista();

    MudarContador();
};

const carregarLista = () => {
    // Carregar tarefas salvas do localStorage
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const lista = document.querySelector('[data-list]');

    // Limpar a lista atual
    lista.innerHTML = "";

    // Adicionar tarefas salvas à lista
    tarefasSalvas.forEach((tarefaObj) => {
        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        const conteudo = `<p class="content">${tarefaObj.texto}</p>`;
        tarefa.innerHTML = conteudo;

        if (tarefaObj.concluida) {
            tarefa.classList.add('task-concluida');
        }

        tarefa.appendChild(BotaoConcluirTarefa());
        tarefa.appendChild(BotaoRemoverTarefa());
        lista.appendChild(tarefa);
    });

    MudarContador();
};

const salvarLista = () => {
    // Salvar a lista de tarefas no localStorage
    const tarefasSalvas = Array.from(document.querySelectorAll('[data-list] li'))
        .map((tarefaElement) => {
            return {
                texto: tarefaElement.querySelector('p.content').textContent,
                concluida: tarefaElement.classList.contains('task-concluida'),
            };
        });
    localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));
};

const concluirTarefa = (tarefaElement) => {
    tarefaElement.classList.toggle('task-concluida');
    // Atualizar e salvar o estado da tarefa no localStorage
    salvarLista();
};

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);

const botaoCarregar = document.querySelector('[data-carregar-button]');
botaoCarregar.addEventListener('click', carregarLista);
