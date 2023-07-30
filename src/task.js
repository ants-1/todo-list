export default class Task {
  constructor(title, date, priority) {
    this.title = title;
    this.date = date;
    this.priority = priority;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setDate(date) {
    this.date = date;
  }

  getDate() {
    return this.date;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }
}
