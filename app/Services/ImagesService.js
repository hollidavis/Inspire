import { ProxyState } from "../AppState.js";
import { imagesApi } from "./AxiosService.js";
import Image from "../Models/Image.js";
class ImagesService {
  async getImages() {
    const res = await imagesApi.get()
    ProxyState.images = new Image(res.data)
  }
}

export const imagesService = new ImagesService()