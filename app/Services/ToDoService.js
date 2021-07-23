import { ProxyState } from "../AppState.js";
import { toDoApi } from "./AxiosService.js";
import ToDo from "../Models/ToDo.js";
class ToDoService {
  async getToDo() {
    const res = await toDoApi.get()
    console.log(res.data)
    ProxyState.toDo = res.data.map(t => new ToDo(t))
  }
  async createToDo(rawToDo) {
    const res = await toDoApi.post('', rawToDo)
    const newToDo = new ToDo(res.data)
    ProxyState.toDo = [...ProxyState.toDo, newToDo]
  }

  async completeToDo(id) {
    let foundToDo = ProxyState.toDo.find(t => t.id == id)
    if (foundToDo.completed == false) {
      foundToDo.completed = true
      ProxyState.completedCount++
    } else {
      foundToDo.completed = false
    }
    const res = await toDoApi.put('/' + id, foundToDo)
    ProxyState.toDo = ProxyState.toDo
    ProxyState.completedCount--
  }

  async deleteToDo(id) {
    const res = await toDoApi.delete(id)
    ProxyState.toDo = ProxyState.toDo.filter(t => t.id != id)
  }
}

export const toDoService = new ToDoService()