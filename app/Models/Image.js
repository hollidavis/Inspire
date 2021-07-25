export default class Image {
  constructor(data) {
    this.largeImgUrl = data.largeImgUrl
  }
  get Template() {
    return /*html*/`
    <style>
      body {
        background - image: url('this.largeImgUrl');
        background-size: cover;
        background-position: center;
        }
    </style>`
  }
}
