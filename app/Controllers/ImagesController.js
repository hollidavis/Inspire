import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"
function _drawImg() {
  document.getElementById('bg-img').innerHTML = ProxyState.images.Template
}
export default class ImagesController {
  constructor() {
    ProxyState.on('images', _drawImg)
    this.getImages()
  }

  async getImages() {
    try {
      await imagesService.getImages()
    } catch (error) {
      console.error(error)
    }
  }
}