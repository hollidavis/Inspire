import { ProxyState } from "../AppState.js"
import { toDoApi } from "../Services/AxiosService.js"
import { toDoService } from "../Services/ToDoService.js"

function _drawToDo() {
  let template = ''
  ProxyState.toDo.forEach(t => {
    template += t.Template
  })
  document.getElementById('todo').innerHTML = template
  if (!template) {
    document.getElementById('todo').innerHTML = `<em>No tasks yet!</em>`
  }
}

function _drawCount() {
  let template = '${ProxyState.completedCount}/${ProxyState.toDoCount}'
  document.getElementById('count').innerHTML = template
  // Look at Garden Shop to see how to render count
}
export default class ToDoController {
  constructor() {
    ProxyState.on('toDo', _drawToDo)
    this.getToDo()
  }
  async getToDo() {
    try {
      await toDoService.getToDo()
    } catch (error) {
      console.error(error)
    }
  }

  async createToDo() {
    try {
      event.preventDefault()
      let form = event.target
      let rawToDo = {
        description: form.description.value
      }
      await toDoService.createToDo(rawToDo)
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  async completeToDo(id) {
    try {
      await toDoService.completeToDo(id)
    } catch (error) {
      console.error(error)
    }
  }

  async deleteToDo(id) {
    try {
      await toDoService.deleteToDo(id)
    } catch (error) {
      console.error(error)
    }
  }
}