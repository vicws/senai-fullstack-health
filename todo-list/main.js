import CompleteTaskButton from './components/completeTask.js'
import DeleteTaskButton from './components/deleteTask.js'
import ChangeCounter from './components/changeCounter.js'
import storedTasks from './json/taskList.json' assert {type: 'json'}

document.addEventListener('DOMContentLoaded', () => {
    ChangeCounter();
});

const createTask = (e) => {
    e.preventDefault();

    const taskList = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const errorMessageElement = document.getElementById("error-message");

    if (input.value.trim() == "") {
        document.getElementById("form-input").classList.add('input-failed');
        errorMessageElement.textContent = "storedTasks vazias não ajudam a memória! =P";
        input.focus();
        return;
    }

    let inputValue = input.value;

    const task = document.createElement('li');
    task.classList.add('task');
    const content = `<p class="content">${inputValue}</p>`;
    task.innerHTML = content;
    // task.appendChild(CompleteTaskButton());
    task.appendChild(CompleteTaskButton(false));
    task.appendChild(DeleteTaskButton(storeList));
    taskList.appendChild(task);
    input.value = "";
    input.focus();

    document.getElementById("form-input").classList.remove('input-failed');
    errorMessageElement.textContent = "";

    // Salvar a lista de storedTasks no localStorage
    const currentTasks = Array.from(document.querySelectorAll('[data-list] li p.content'))
        .map((task) => task.textContent);
    localStorage.setItem('storedTasks', JSON.stringify(currentTasks));

    ChangeCounter();
};

const loadList = () => {

    // Carregar as tarefas do objeto storedTasks no localStorage
    const storedTasks = JSON.parse(localStorage.getItem('tarefas')) || [];
    const taskList = document.querySelector('[data-list]');

    taskList.innerHTML = "";

    // Adiciona as tarefas carregadas à lista
    storedTasks.forEach((taskData) => {
        const { text, completed } = taskData;
        const task = document.createElement('li');
        task.classList.add('task');

        // Adiciona a classe "done" se o booleano "completed" for verdadeiro
        if (completed) {
            task.classList.add('done');
        }
        
        const content = `<p class="content">${text}</p>`;
        task.innerHTML = content;
        
        // Envia o booleano "completo" para o botão de tarefa completa
        task.appendChild(CompleteTaskButton(completed));

        task.appendChild(DeleteTaskButton());
        taskList.appendChild(task);
    });

    ChangeCounter();
};

const storeList = () => {
    // Salvar a lista de tarefas no objeto storedTasks no localStorage
    const currentList = Array.from(document.querySelectorAll('[data-list] li'))
        .map((taskElement) => {
            const text = taskElement.querySelector('p.content').textContent;
            const completed = taskElement.classList.contains('done');
            return { text, completed };
        });

    localStorage.setItem('tarefas', JSON.stringify(currentList));
};


const newTask = document.querySelector('[data-form-button]');
newTask.addEventListener('click', createTask);

const loadButton = document.querySelector('[data-load-button]');
loadButton.addEventListener('click', loadList);

const storeButton = document.querySelector('[data-store-button]');
storeButton.addEventListener('click', storeList);