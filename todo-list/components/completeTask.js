const CompleteTaskButton = (completed = false) => {
    const doneBtn = document.createElement('button');

    doneBtn.classList.add('check-button');
    doneBtn.innerText = completed ? 'Done' : 'To Do';
    doneBtn.addEventListener('click', completeTask);

    return doneBtn;
}


const completeTask = (e) => {
    const doneBtn = e.target;

    const taskComplete = doneBtn.parentElement;

    taskComplete.classList.toggle('done');
    if (doneBtn.innerText == 'To Do'){
        return doneBtn.innerText = 'Done'
    } else {
        return doneBtn.innerText = 'To Do'
    }
}

export default CompleteTaskButton