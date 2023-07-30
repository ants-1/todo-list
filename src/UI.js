import Task from './task';
import Project from './project';

const UI = (() => {
  const menuIcon = document.querySelector('.icon-bar');
  const sidebar = document.getElementById('sidebar');
  const addProjectBtn = document.querySelector('.add-project-btn');
  const newProject = document.querySelector('.new-project');
  const addNewProjectBtn = document.querySelector('.add-project');
  const addTaskBtn = document.querySelector('.add-task');
  const addNewTask = document.querySelector('.add-new-task');
  const addNewTaskBtn = document.querySelector('.add-task-btn');
  const taskList = document.querySelector('.task-list');
  const cancelProjectBtn = document.querySelector('.cancel-project');
  const cancelTaskBtn = document.querySelector('.cancel-task-btn');
  const projectSection = document.querySelector('.project-list');
  const overlay = document.getElementById('overlay');

  function toggleMenu(elem) {
    if (elem.classList.contains('hidden')) {
      elem.classList.remove('hidden');
    } else {
      elem.classList.add('hidden');
    }
  }

  function overlayOn() {
    overlay.style.display = 'block';
  }

  function overlayOff() {
    overlay.style.display = 'none';
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

  function createBtn(classNames, text) {
    const btn = document.createElement('button');
    btn.classList.add(...classNames);
    btn.textContent = text;

    return btn;
  }

  function createTaskCard(title, date, priority) {
    const taskCard = createDiv(['task-card', 'new-task']);
    const left = createDiv(['left']);
    const right = createDiv(['right']);
    const taskPriority = createDiv(['priority']);
    const checkbox = createInput('checkbox', 'checkbox', 'checkbox');
    const taskTitle = createPara(['task-title'], title);
    const dueDate = createPara(['due-date'], date);
    const removeTask = createPara(['remove-task'], 'X');

    if (priority === 'high') {
      taskPriority.style.backgroundColor = '#ff6d60';
    } else if (priority === 'mid') {
      taskPriority.style.backgroundColor = '#f3e99f';
    } else if (priority === 'low') {
      taskPriority.style.backgroundColor = '#98d8aa';
    } else {
      taskPriority.style.backgroundColor = '#3c486b';
    }

    left.appendChild(taskPriority);
    left.appendChild(checkbox);
    left.appendChild(taskTitle);
    right.appendChild(dueDate);
    right.appendChild(removeTask);
    taskCard.appendChild(left);
    taskCard.appendChild(right);

    return taskCard;
  }

  function createTask() {
    const title = document.getElementById('new-task-title').value;
    let dueDate = document.getElementById('new-task-date').value;
    const priority = document.getElementById('new-task-priority').value;

    if (title === '') {
      alert('Please enter task name');
      return;
    }

    if (dueDate === '') {
      dueDate = 'No Date';
    }

    const newTask = new Task(title, dueDate, priority);
    const newTaskCard = createTaskCard(
      newTask.getTitle(),
      newTask.getDate(),
      newTask.getPriority(),
    );

    taskList.prepend(newTaskCard);
    console.log(newTask);

    return newTaskCard;
  }

  function deleteTask(taskCard) {
    taskCard.remove();
  }

  function createProjectCard(title) {
    const projectCard = createBtn(['project'], title);

    return projectCard;
  }

  function createProject() {
    const projectName = document.getElementById('project-name').value;

    if (projectName === '') {
      alert('Please enter project name');
      return;
    }

    const project = new Project(projectName);
    const newProjectCard = createProjectCard(project.getName());
    projectSection.prepend(newProjectCard);
    console.log(project);
    console.log(project.getProjectTasks());

    return newProjectCard;
  }

  function loadProject() {
    const projectTitle = document.querySelector('project-title');
  }

  menuIcon.addEventListener('click', () => toggleMenu(sidebar));
  addProjectBtn.addEventListener('click', () => openMenu(newProject));
  addTaskBtn.addEventListener('click', () => {
    overlayOn();
    openMenu(addNewTask);
  });
  addNewProjectBtn.addEventListener('click', () => createProject());
  cancelProjectBtn.addEventListener('click', () => closeMenu(newProject));
  cancelTaskBtn.addEventListener('click', () => {
    overlayOff();
    closeMenu(addNewTask);
  });
  addNewTaskBtn.addEventListener('click', () => {
    createTask();
    overlayOff();
  });
  taskList.addEventListener('click', (event) => {
    const { target } = event;
    const taskCard = target.closest('.task-card');
    if (target.classList.contains('remove-task')) {
      deleteTask(taskCard);
    }
  });

  return {
    toggleMenu,
    openMenu,
    closeMenu,
    overlayOn,
    overlayOff,
    createDiv,
    createInput,
    createPara,
    createTaskCard,
    createTask,
    createProjectCard,
    createProject,
  };
})();

export default UI;
