export const imagesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
  timeout: 10000
})

export const quotesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 10000
})

export const toDoApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/holli/todos',
  timeout: 10000
})

export const weatherApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 10000
})