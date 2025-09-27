const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if(taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;


  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });


  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent toggling complete
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = '';
});


taskInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') addTaskBtn.click();
});
