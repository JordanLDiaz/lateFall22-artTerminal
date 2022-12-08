export class Project {
  constructor (data) {
    this.id = data.id
    this.title = data.title
    this.coverImg = data.coverImg
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.projectImgs = data.projectImgs
    this.projectImgs.unshift(this.coverImg)
  }
}