function customTask(text) {
    return ` <div class="flex gap-3 w-full p-1 transition-colors items-center">
    <button onClick = "checkList(this)" class="bg-slate-100 w-10 h-10 rounded-full"> <i class="fa-solid fa-check text-xl text-slate-100"></i></button>
    <p class="grow">${text}</p>
    <div class="gap-1">
       <button onClick = "updateTask(this)" class=" hover:bg-cyan-500 hover:text-white rounded-full w-10 h-10 text-cyan-600 border bg-white transition-colors "><i class="fa-solid fa-pen"></i></button>
     <button onclick = "deleteTask(this)" class=" hover:bg-cyan-500 hover:text-white rounded-full w-10 h-10 text-cyan-600 border bg-white transition-colors "><i class="fa-solid fa-trash "></i></button>
    </div>
    </div>`
}



/*                                              A d d    A    t a s k                                        */
function addTask() {
    const inputValue = document.querySelector('input');
    if (inputValue.value === '') {
        alert('You forget to write your tasks 😄')
    } else {
        const taskList = document.querySelector('.taskList');
        taskList.innerHTML += customTask(inputValue.value);
        inputValue.value = ''; 
    }
}
/*                                          d e l e t e   A   t a s  k                                       */
function deleteTask(target) {
    target.parentElement.parentElement.remove();
}


/*                                             u p d a t e   A   t a s k                                     */
function updateTask(target) {
    const text = target.parentElement.previousElementSibling.innerText;
    target.parentElement.previousElementSibling.innerHTML = `<input type='text' class="update-input" onblur="saveInput(this)" value="${text}" 
    />`
}


/*                                        S a v e   T h e    T a r g e t     (And The CheckMark)                                */


function saveInput(target) {
    target.parentElement.innerHTML = `<p class="grow">${target.value}</p>`;
}


function checkList(target) {
    if(target.classList.contains('bg-slate-100')){
        target.classList.remove('bg-slate-100');
        target.classList.add('bg-green-500');
        target.children[0].classList.remove('text-slate-100');
        target.children[0].classList.add('text-white');
    } else {
        target.classList.remove('bg-green-500');
        target.classList.add('bg-slate-100');
        target.children[0].classList.remove('text-green-500');
        target.children[0].classList.add('text-slate-100');
    }


}