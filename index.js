const addTask = document.querySelector('#add');
const taskTemplate = document.querySelector('.task');
const task_box = taskTemplate.parentElement;

// Function to add event listeners to checkboxes
function addCheckboxListener(checkbox) {
    // Checking the check box
    checkbox.addEventListener('click', (e) => {
        const parentTask = checkbox.parentElement;
        if (parentTask.classList.contains('complete')) {
            parentTask.classList.remove('complete');
        }  else {
            if (checkbox.nextElementSibling.value.trim() !== '') {
                parentTask.classList.add('complete');
            } else {
                alert('Bhai pehle kuch soch, kuch kr, tb to complete kr 😂');
            }
        }
        updateProgress(); // after checking , updating progress bar
    });
}
// function to add event listner to delete
function addDelListener(del) {
    del.addEventListener('click', (e) => {
        const parentTask = del.parentElement;
        parentTask.remove();
        updateProgress();
    });
}

// Initial delete buttons event listeners
document.querySelectorAll('.delete').forEach(addDelListener);

// Initial checkboxes event listeners
document.querySelectorAll('.checked').forEach(addCheckboxListener);


// Add Button effect
addTask.addEventListener('click', () => {
    // cloned Task to add it easily
    const clonedTask = taskTemplate.cloneNode(true);
    clonedTask.classList.remove('complete'); // unchecked it
    clonedTask.childNodes[3].value = ''; // emptied the input

    task_box.appendChild(clonedTask);  // added task to task box

    const newCheckbox = clonedTask.querySelector('.checked');
    addCheckboxListener(newCheckbox);   // updated the new task with checkbox listner
    const newDelete = clonedTask.querySelector('.delete');
    addDelListener(newDelete); // updated the new task with delete listner
    updateProgress();    // after adding task updating the progress bar
});


// Progress Bar
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
});

function updateProgress() {
    const tasks = document.querySelectorAll('.task');
    const completedTasks = document.querySelectorAll('.task.complete');
    const totalTasks = tasks.length;
    const completedCount = completedTasks.length;

    const progress = totalTasks === 0 ? 0 : (completedCount / totalTasks) * 100;

    const bar = document.getElementById('bar');
    const text = document.getElementById('text');

    bar.style.width = `${progress}%`;
    text.innerText = `${Math.round(progress)}%`;
}
