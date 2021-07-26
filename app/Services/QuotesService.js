import { ProxyState } from "../AppState.js";
import { quotesApi } from "./AxiosService.js";
import Quote from "../Models/Quote.js";

class QuotesService {
  async getQuotes() {
    const res = await quotesApi.get()
    ProxyState.quotes = new Quote(res.data)
  }
}

export const quotesService = new QuotesService()