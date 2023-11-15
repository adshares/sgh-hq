import { UIPlacement } from './UIPlacement'

declare type TImage = {
  path: string,
  sw?: number,
  sh?: number,
}

declare type TRS = {
  entity: Entity,
  speed: number
}

class RotationSystem implements ISystem {
  _entities: TRS[] = []

  // _speed: number = 2

  constructor () {
    engine.addSystem(this)
  }

  update () {
    // log(this._entities)
    this._entities.forEach(e => {
      let transform = e.entity.getComponentOrCreate(Transform)
      transform.rotate(Vector3.Up(), e.speed)
    })
  }

  setEntity (entity: Entity, speed?: number) {
    // log(speed)
    if (typeof (speed) !== 'number') {
      speed = 2
    }
    log(speed, { entity, speed })
    this._entities = [...this._entities, { entity, speed }]
    // log(this._entities)
  }
}

// const rs = new RotationSystem()
// engine.addSystem(rs)

export class Totem extends Entity {
  private image: UIPlacement | undefined
  private particles: Entity | undefined

  constructor (model: string, config?: { link?: string, image?: TImage, particles?: { model: string, position?: TransformConstructorArgs } }) {
    super()
    const rs = new RotationSystem()

    this.addComponent(new GLTFShape(model))
    if (!!config && !!config.link && !config.image) {
      this.addComponent(new OnPointerDown(() => {
        openExternalURL(<string>config.link)
      }))
    }

    if (!!config && !!config.image) {
      this.image = new UIPlacement(config.image)
      this.addComponent(new OnPointerDown(() => {
        this.image?.render(<string>config.image?.path)
        if (!!config.link) {
          this.image?.imageLink(config.link)
        }
      }))
    }

    if (!!config && !!config.particles) {
      this.particles = new Entity()
      this.particles.addComponent(new GLTFShape(config.particles.model))
      this.particles.addComponent(new Transform(config.particles.position))
      this.particles.setParent(this)
      rs.setEntity(this.particles, -0.75)
    }

    rs.setEntity(this, 1)
  }
}
