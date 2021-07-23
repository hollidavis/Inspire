export default class ToDo {
  constructor(data) {
    this.description = data.description
    this.completed = data.completed
    this.user = data.user || 'Holli'
    this.id = data.id
  }

  get Template() {
    return /*html*/ `
  <div class="d-flex flex-row justify-content-between">
    <div class = "w-100 d-flex flex-row align-items-center">
      <input type="checkbox" id="${this.id}"
        onclick="app.toDoController.completeToDo('${this.id}')" ${this.completed ? "checked"
        : ""}>
        <p class="pl-1 m-0 ${this.completed ? 'strikethrough' : ''}">${this.description}</p>
    </div>
    <span>
        <i class="mdi mdi-18px mdi-trash-can"
          onclick="app.toDoController.deleteToDo('${this.id}')"></i>
    </span>
  </div>`
  }
}