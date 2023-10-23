import { Build } from './build'
import { Totem } from './totem'

class RotationSystem implements ISystem {
  _entities: Entity[] = []

  update () {
    this._entities.forEach(e => {
      let transform = e.getComponentOrCreate(Transform)
      transform.rotate(Vector3.Up(), 2)
    })
  }

  setEntity (entities: Entity[]) {
    this._entities = [...this._entities, ...entities]
  }
}

const rs = new RotationSystem()
engine.addSystem(rs)

const scene = new Entity()
scene.addComponent(new Transform({
  position: new Vector3(96, 0, 64)
}))
engine.addEntity(scene)

const build = new Build()
build.setParent(scene)

/*----------------------TOTEMY DACH--------------------------*/
const totem_chmura = new Totem('models/totemy-dach/totem_chmura.glb', {
  link: 'https://google.com'
})
totem_chmura.addComponent(new Transform({
  position: new Vector3(-21.014, 21.817, -12.697)
}))
totem_chmura.setParent(build)
rs.setEntity([totem_chmura])

const totem_kartagraficzna = new Totem('models/totemy-dach/totem_kartagraficzna.glb', {
  link: 'https://google.com'
})
totem_kartagraficzna.addComponent(new Transform({
  position: new Vector3(-12.809, 21.817, -42.898)
}))
totem_kartagraficzna.setParent(build)
rs.setEntity([totem_kartagraficzna])

const totem_macintosh = new Totem('models/totemy-dach/totem_macintosh.glb', {
  link: 'https://google.com'
})
totem_macintosh.addComponent(new Transform({
  position: new Vector3(-12.524, 21.817, -20.977)
}))
totem_macintosh.setParent(build)
rs.setEntity([totem_macintosh])

const totem_meta = new Totem('models/totemy-dach/totem_meta.glb', {
  link: 'https://google.com'
})
totem_meta.addComponent(new Transform({
  position: new Vector3(-43.17, 21.817, -51.825)
}))
totem_meta.setParent(build)
rs.setEntity([totem_meta])

const totem_minecraft = new Totem('models/totemy-dach/totem_minecraft.glb', {
  link: 'https://google.com'
})
totem_minecraft.addComponent(new Transform({
  position: new Vector3(-51.737, 21.817, -20.971)
}))
totem_minecraft.setParent(build)
rs.setEntity([totem_minecraft])

const totem_pizza = new Totem('models/totemy-dach/totem_pizza.glb', {
  link: 'https://google.com'
})
totem_pizza.addComponent(new Transform({
  position: new Vector3(-51.802, 21.817, -43.007)
}))
totem_pizza.setParent(build)
rs.setEntity([totem_pizza])

const totem_sfera = new Totem('models/totemy-dach/totem_sfera.glb', {
  link: 'https://google.com'
})
totem_sfera.addComponent(new Transform({
  position: new Vector3(-21.059, 21.817, -51.678)
}))
totem_sfera.setParent(build)
rs.setEntity([totem_sfera])

const totem_shiba = new Totem('models/totemy-dach/totem_shiba.glb', {
  link: 'https://google.com'
})
totem_shiba.addComponent(new Transform({
  position: new Vector3(-43.111, 21.817, -12.498)
}))
totem_shiba.setParent(build)
rs.setEntity([totem_shiba])

const totem_www = new Totem('models/totemy-dach/totem_www.glb', {
  link: 'https://google.com'
})
totem_www.addComponent(new Transform({
  position: new Vector3(-32.064, 21.817, -12.568)
}))
totem_www.setParent(build)
rs.setEntity([totem_www])
/*----------------------TOTEMY DACH--------------------------*/

/*----------------------TOTEMY PARTER--------------------------*/
const totem_kula = new Totem('models/totemy-parter/totem_kula.glb', {
  // link: 'https://google.com'
  image: {
    path: 'images/SGH_grafika_1.png'
  }
})
totem_kula.addComponent(new Transform({
  position: new Vector3(-21.1407, 0, -31.926)
}))
totem_kula.setParent(build)
rs.setEntity([totem_kula])

const totem_blockchain1 = new Totem('models/totemy-parter/totem_blockchain.glb', {
  link: 'https://google.com'
})
totem_blockchain1.addComponent(new Transform({
  position: new Vector3(-49.604, 1.90034, -14.3937)
}))
totem_blockchain1.setParent(build)
rs.setEntity([totem_blockchain1])

const totem_blockchain2 = new Totem('models/totemy-parter/totem_blockchain.glb', {
  link: 'https://google.com'
})
totem_blockchain2.addComponent(new Transform({
  position: new Vector3(-49.604, 1.90034, -18.7819)
}))
totem_blockchain2.setParent(build)
rs.setEntity([totem_blockchain2])

const totem_blockchain3 = new Totem('models/totemy-parter/totem_blockchain.glb', {
  link: 'https://google.com'
})
totem_blockchain3.addComponent(new Transform({
  position: new Vector3(-45.2007, 1.90034, -14.3937)
}))
totem_blockchain3.setParent(build)
rs.setEntity([totem_blockchain3])

const totem_inne1 = new Totem('models/totemy-parter/totem_inne.glb', {
  link: 'https://google.com'
})
totem_inne1.addComponent(new Transform({
  position: new Vector3(-14.4668, 1.45938, -14.3337)
}))
totem_inne1.setParent(build)
rs.setEntity([totem_inne1])

const totem_inne2 = new Totem('models/totemy-parter/totem_inne.glb', {
  link: 'https://google.com'
})
totem_inne2.addComponent(new Transform({
  position: new Vector3(-14.4668, 1.45938, -18.7463)
}))
totem_inne2.setParent(build)
rs.setEntity([totem_inne2])

const totem_inne3 = new Totem('models/totemy-parter/totem_inne.glb', {
  link: 'https://google.com'
})
totem_inne3.addComponent(new Transform({
  position: new Vector3(-18.8524, 1.45938, -14.3337)
}))
totem_inne3.setParent(build)
rs.setEntity([totem_inne3])

const totem_inne4 = new Totem('models/totemy-parter/totem_inne.glb', {
  link: 'https://google.com'
})
totem_inne4.addComponent(new Transform({
  position: new Vector3(-14.4668, 1.45938, -23.1425)
}))
totem_inne4.setParent(build)
rs.setEntity([totem_inne4])

const totem_prawo1 = new Totem('models/totemy-parter/totem_prawo.glb', {
  link: 'https://google.com'
})
totem_prawo1.addComponent(new Transform({
  position: new Vector3(-14.4693, 1.44924, -49.6006)
}))
totem_prawo1.setParent(build)
rs.setEntity([totem_prawo1])

const totem_prawo2 = new Totem('models/totemy-parter/totem_prawo.glb', {
  link: 'https://google.com'
})
totem_prawo2.addComponent(new Transform({
  position: new Vector3(-14.4693, 1.44924, -45.0837)
}))
totem_prawo2.setParent(build)
rs.setEntity([totem_prawo2])

const totem_prawo3 = new Totem('models/totemy-parter/totem_prawo.glb', {
  link: 'https://google.com'
})
totem_prawo3.addComponent(new Transform({
  position: new Vector3(-18.59, 1.44924, -49.6006)
}))
totem_prawo3.setParent(build)
rs.setEntity([totem_prawo3])

const totem_prawo4 = new Totem('models/totemy-parter/totem_prawo.glb', {
  link: 'https://google.com'
})
totem_prawo4.addComponent(new Transform({
  position: new Vector3(-14.4693, 1.44924, -40.6695)
}))
totem_prawo4.setParent(build)
rs.setEntity([totem_prawo4])

const totem_technologia1 = new Totem('models/totemy-parter/totem_technologia.glb', {
  link: 'https://google.com'
})
totem_technologia1.addComponent(new Transform({
  position: new Vector3(-49.5803, 1.603, -49.5911)
}))
totem_technologia1.setParent(build)
rs.setEntity([totem_technologia1])

const totem_technologia2 = new Totem('models/totemy-parter/totem_technologia.glb', {
  link: 'https://google.com'
})
totem_technologia2.addComponent(new Transform({
  position: new Vector3(-49.5803, 1.603, -45.1144)
}))
totem_technologia2.setParent(build)
rs.setEntity([totem_technologia2])

const totem_technologia3 = new Totem('models/totemy-parter/totem_technologia.glb', {
  link: 'https://google.com'
})
totem_technologia3.addComponent(new Transform({
  position: new Vector3(-45.0331, 1.603, -49.5911)
}))
totem_technologia3.setParent(build)
rs.setEntity([totem_technologia3])
/*----------------------TOTEMY PARTER--------------------------*/

