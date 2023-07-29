export default class Task {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  setDate(date) {
    this.date = date;
  }

  getDate() {
    return this.date;
  }
}
