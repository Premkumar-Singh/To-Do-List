const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-checkbox';

  const span = document.createElement('span');
  span.textContent = taskText;
  span.className = 'task-text';

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(removeBtn);

  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed', checkbox.checked);
  });

  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  taskList.appendChild(li);

  taskInput.value = '';
});
