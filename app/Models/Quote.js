export default class Quote {
  constructor(data) {
    this.content = data.content
    this.author = data.author
  }
  get Template() {
    return /*HTML*/`
    <h5>"${this.content}"</h5>
    <p class = "author">${this.author}</p>
    `
  }
}