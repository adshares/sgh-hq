import { UIPlacement } from './UIPlacement'

declare type TImage = {
  path: string
}

export class Totem extends Entity {
  private image: UIPlacement | undefined

  constructor (model: string, config?: { link?: string, image?: TImage }) {
    super()
    this.addComponent(new GLTFShape(model))
    if (!!config && !!config.link) {
      this.addComponent(new OnPointerDown(() => {
        openExternalURL(<string>config.link)
      }))
    }

    if (!!config && !!config.image) {
      this.image = new UIPlacement()
      this.addComponent(new OnPointerDown(() => {
        this.image?.render(<string>config.image?.path)
      }))
    }
  }
}
