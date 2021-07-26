import { ProxyState } from "../AppState.js";
import { imagesApi } from "./AxiosService.js";
import Image from "../Models/Image.js";
class ImagesService {
  async getImages() {
    const res = await imagesApi.get()
    console.log(res.data)
    ProxyState.images = new Image(res.data)
    console.log(ProxyState.images)
  }
}

export const imagesService = new ImagesService()