import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"

function _drawQuotes() {
  document.getElementById('quotes').innerHTML = ProxyState.quotes.Template
}
export default class QuotesController {
  constructor() {
    ProxyState.on('quotes', _drawQuotes)
    this.getQuotes()
  }

  async getQuotes() {
    try {
      quotesService.getQuotes()
    } catch (error) {
      console.error(error)
    }
  }
}