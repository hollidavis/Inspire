import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"
function _drawImg() {
  let images = ProxyState.images
  let template = ''
  images.forEach(i => template += i.Template)
  document.getElementById('bg-img').innerHTML = template
}
export default class ImagesController {
  constructor() {
    this.getImages
    _drawImg
  }

  async getImages() {
    try {
      await imagesService.getImages()
    } catch (error) {
      console.error(error)
    }
  }
}