export default class Project {
  constructor(name) {
    this.name = name;
    this.projectTasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setProjectTasks(projectTasks) {
    this.projectTasks = projectTasks;
  }

  getProjectTasks() {
    return this.projectTasks;
  }

  getTask(taskName) {
    return this.projectTasks.find((task) => task.getName() === taskName);
  }

  addTask(newTask) {
    if (!this.projectTasks.find((task) => task.getName() === newTask.getName())) {
      this.projectTasks.push(newTask);
    }
  }
}
