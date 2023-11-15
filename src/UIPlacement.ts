import { sections, setSourceParams, theme } from './theme'

const canvas = new UICanvas()

export class UIPlacement extends Entity {
  private readonly _width: number = 0
  private readonly _height: number = 0
  private _background: UIContainerRect = new UIContainerRect(canvas)
  private _placement: UIImage = new UIImage(this._background, new Texture(''))

  private _closeIcon: UIImage = new UIImage(this._placement, theme)

  private sw: number
  private sh: number

  constructor (image: { path: string, sw?: number, sh?: number }) {
    super()

    this.sw = image.sw || 1654
    this.sh = image.sh || 1654

    this._width = 600
    this._height = 600
    this._background.positionX = 0
    this._background.positionY = 20

    this._background.width = this._width
    this._background.height = this._height
    this._background.visible = false

    this._placement.hAlign = 'center'
    this._placement.vAlign = 'center'
    this._placement.positionY = 0
    this._placement.visible = false

    this._closeIcon.width = 24
    this._closeIcon.height = 24
    setSourceParams(this._closeIcon, sections.closeIcon)
    this._closeIcon.visible = false
  }

  public render (path: string) {
    this._background.visible = true

    this._placement.source = new Texture(path)
    this._placement.width = this._width
    this._placement.height = this._height
    this._placement.sourceWidth = this.sw
    this._placement.sourceHeight = this.sh

    this._placement.visible = true
    this._placement.isPointerBlocker = true

    this._closeIcon.positionX = parseInt(String(this._placement.width)) / 2 - 12
    this._closeIcon.positionY = parseInt(String(this._placement.height)) / 2 - 12
    this._closeIcon.onClick = new OnClick(() => {
      this.reset()
    })
    this._closeIcon.visible = true
  }

  public reset (): void {
    if (this._placement) {
      this._background.visible = false
      this._placement.visible = false
      this._closeIcon.visible = false
    }
  }


  public imageLink(url: string): void {
    this._placement.onClick = new OnClick(() => {
      openExternalURL(url)
    })
  }
}
