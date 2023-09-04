class RotationSystem implements ISystem {
  _entities: Entity[] = []

  update () {
    this._entities.forEach(e => {
      let transform = e.getComponent(Transform)
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
engine.addEntity(scene)

const build = new Entity()
build.addComponent(new GLTFShape('models/build.glb'))
build.addComponent(new Transform({
  position: new Vector3(160, 0, 160)
}))
build.setParent(scene)

const rotatingTotem = new Entity()
rotatingTotem.addComponent(new GLTFShape('models/totem1.glb'))
rotatingTotem.addComponent(new Transform({
  position: new Vector3(-79, 1, -79)
}))
rs.setEntity([rotatingTotem])
rotatingTotem.setParent(build)

const linkTotem = new Entity()
linkTotem.addComponent(new GLTFShape('models/totem2.glb'))
linkTotem.addComponent(new Transform({
  position: new Vector3(-81, 1, -79)
}))
linkTotem.addComponent(new OnPointerDown(() => {
  openExternalURL('https://web3ads.net/')
}, { hoverText: 'Open link' }))
linkTotem.setParent(build)

const pdfTotem = new Entity()
pdfTotem.addComponent(new GLTFShape('models/totem3.glb'))
pdfTotem.addComponent(new Transform({
  position: new Vector3(-80, 1, -81)
}))
pdfTotem.addComponent(new OnPointerDown(() => {
  openExternalURL('https://web3ads.net/docs/web3ads_offer_2023_03.pdf')
}, { hoverText: 'Open PDF' }))
pdfTotem.setParent(build)
