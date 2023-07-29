const UI = (() => {
  const menuIcon = document.querySelector('.icon-bar');
  const sidebar = document.getElementById('sidebar');
  const addProjectBtn = document.querySelector('.add-project-btn');
  const newProject = document.querySelector('.new-project');
  const addTaskBtn = document.querySelector('.add-task');
  const addNewTask = document.querySelector('.add-new-task');
  const addNewTaskBtn = document.querySelector('.add-task-btn');
  const taskList = document.querySelector('.task-list');
  const cancelProjectBtn = document.querySelector('.cancel-project');
  const cancelTaskBtn = document.querySelector('.cancel-task-btn');

  function toggleMenu(elem) {
    if (elem.classList.contains('hidden')) {
      elem.classList.remove('hidden');
    } else {
      elem.classList.add('hidden');
    }
  }

  function openMenu(elem) {
    if (elem.classList.contains('hidden')) {
      elem.classList.remove('hidden');
    }
  }

  function closeMenu(elem) {
    if (!elem.classList.contains('hidden')) {
      elem.classList.add('hidden');
    }
  }

  function createDiv(classNames) {
    const div = document.createElement('div');
    div.classList.add(...classNames);

    return div;
  }

  function createInput(type, name, id) {
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.id = id;

    return input;
  }

  function createPara(classNames, text) {
    const para = document.createElement('p');
    para.classList.add(...classNames);
    para.textContent = text;

    return para;
  }

  function createTask() {
    const taskCard = createDiv(['task-card', 'new-task']);
    const left = createDiv(['left']);
    const right = createDiv(['right']);
    const priority = createDiv(['priority']);
    const checkbox = createInput('checkbox', 'checkbox', 'checkbox');
    const taskTitle = createPara(['task-title'], 'title');
    const dueDate = createPara(['due-date'], 'date');
    const removeTask = createPara(['remove-task'], 'X');

    left.appendChild(priority);
    left.appendChild(checkbox);
    left.appendChild(taskTitle);
    right.appendChild(dueDate);
    right.appendChild(removeTask);
    taskCard.appendChild(left);
    taskCard.appendChild(right);

    return taskCard;
  }

  menuIcon.addEventListener('click', () => toggleMenu(sidebar));
  addProjectBtn.addEventListener('click', () => openMenu(newProject));
  addTaskBtn.addEventListener('click', () => openMenu(addNewTask));
  cancelProjectBtn.addEventListener('click', () => closeMenu(newProject));
  cancelTaskBtn.addEventListener('click', () => closeMenu(addNewTask));
  addNewTaskBtn.addEventListener('click', () => {
    taskList.prepend(createTask());
  });

  return {
    toggleMenu,
    openMenu,
    closeMenu,
    createDiv,
    createInput,
    createPara,
    createTask,
  };
})();

export default UI;
