import ChangeCounter from './changeCounter.js'

const DeleteTaskButton = () => {
    const deleteBtn = document.createElement('button');

    deleteBtn.classList.add('delete-button');

    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);
    return deleteBtn;
}

const deleteTask = (e, storeList) => {
    const deleteBtn = e.target;
    const deleteTask = deleteBtn.parentElement;


    // estrutura "if" comentada porque achei ruim para a experiência do usuário ter um alerta toda vez que quer deletar algo
    // if (confirm("Tem certeza que quer remover a tarefa?")) {
    deleteTask.remove();

    if (storeList) {
        storeList();
    }
    // return deleteBtn
    // } else {
    //     return
    // }

    ChangeCounter();

};

export default DeleteTaskButton