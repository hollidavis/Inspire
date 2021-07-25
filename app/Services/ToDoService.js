import { ProxyState } from "../AppState.js";
import { toDoApi } from "./AxiosService.js";
import ToDo from "../Models/ToDo.js";
class ToDoService {
  async getToDo() {
    const res = await toDoApi.get()
    ProxyState.toDo = res.data.map(t => new ToDo(t))
  }
  async createToDo(rawToDo) {
    const res = await toDoApi.post('', rawToDo)
    const newToDo = new ToDo(res.data)
    ProxyState.toDo = [...ProxyState.toDo, newToDo]
    ProxyState.toDoCount++
  }

  async completeToDo(id) {
    let foundToDo = ProxyState.toDo.find(t => t.id == id)
    if (foundToDo.completed == false) {
      foundToDo.completed = true
      ProxyState.completedCount++
    } else {
      foundToDo.completed = false
      if (ProxyState.completedCount > 0) {
        ProxyState.completedCount--
      }
    }
    const res = await toDoApi.put('/' + id, foundToDo)
    ProxyState.toDo = ProxyState.toDo
  }

  async deleteToDo(id) {
    const res = await toDoApi.delete(id)
    ProxyState.toDo = ProxyState.toDo.filter(t => t.id != id)
    if (ProxyState.completedCount > 0) {
      ProxyState.completedCount--
    }
    if (ProxyState.toDoCount > 0) {
      ProxyState.toDoCount--
    }
  }
}

export const toDoService = new ToDoService()