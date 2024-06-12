const addtask = document.querySelector('#add');
const Task = document.querySelector('.task');
const allcheckbox = document.querySelectorAll('.checked');

// Add Button effect
addtask.addEventListener('click', () => {
    const cloned = Task.cloneNode(true);
    cloned.classList.remove('complete');
    cloned.lastElementChild.value = '';
    Task.parentElement.appendChild(cloned);
});

// checkbox clicks
allcheckbox.forEach((checkbox)=>{
    const par = checkbox.parentElement;
    checkbox.addEventListener('click', (e)=>{
        if(par.classList.contains('complete')){ par.classList.remove('complete');  }
        else{
            if(checkbox.nextElementSibling.value != ''){ par.classList.add('complete'); }
            else{
                alert('Bhai phle kuch soch, kuch kr, tab to complete kr 😂');
            }         
        }        
    });
});



