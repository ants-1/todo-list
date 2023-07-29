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
}
