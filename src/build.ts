export class Build extends Entity{
  constructor () {
    super()
    const floor = new Entity()
    floor.addComponent(new GLTFShape('models/floor.glb'))
    floor.setParent(this)

    const elevation = new Entity()
    elevation.addComponent(new GLTFShape('models/elevation.glb'))
    elevation.setParent(this)

    const columns = new Entity()
    columns.addComponent(new GLTFShape('models/columns.glb'))
    columns.setParent(this)

    const kolbeki = new Entity()
    kolbeki.addComponent(new GLTFShape('models/kolbeki.glb'))
    kolbeki.setParent(this)
  }
}
