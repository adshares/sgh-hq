import { TriggerBoxShape, TriggerComponent } from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'

export class Build extends Entity{
  constructor () {
    super()
    // const floor = new Entity()
    // floor.addComponent(new GLTFShape('models/floor.glb'))
    // floor.setParent(this)
    //
    // const elevation = new Entity()
    // elevation.addComponent(new GLTFShape('models/elevation.glb'))
    // elevation.setParent(this)
    //
    // const columns = new Entity()
    // columns.addComponent(new GLTFShape('models/columns.glb'))
    // columns.setParent(this)
    //
    // const kolbeki = new Entity()
    // kolbeki.addComponent(new GLTFShape('models/kolbeki.glb'))
    // kolbeki.setParent(this)

    const build = new Entity()
    build.addComponent(new GLTFShape('models/sgh-build.glb'))
    build.setParent(this)

    const groundCoords = new Vector3(68.00,2.88,14.07)
    const floorCords = new Vector3(59.93,24 ,13.67)

    const teleportUp = new Entity()
    teleportUp.addComponent(new Transform({
      position: new Vector3(-36.3, 2.03,-50.6),
      scale: new Vector3(2,2,1),
      rotation: Quaternion.Euler(90,0,0),
    }))
    teleportUp.setParent(this)

    const teleportUpZone = new Entity()
    const teleportUpTriggerBox = new TriggerBoxShape(new Vector3(2,3,2))
    const teleportUpTriggerComponent = new TriggerComponent(teleportUpTriggerBox, {
      onCameraEnter: () => {
        log('ENTER')
        movePlayerTo(floorCords, new Vector3(groundCoords.x, 22.2, groundCoords.z))
      },
      // enableDebug: true
    })
    teleportUpZone.addComponent(new Transform({
      position: new Vector3(0,0,-1.5),
      scale: new Vector3(1,1,1)
    }))
    teleportUpZone.addComponent(teleportUpTriggerComponent)
    teleportUpZone.setParent(teleportUp)

    const teleportDown = new Entity()
    teleportDown.addComponent(new Transform({
      position: new Vector3(-28, 22.2,-50.6),
      scale: new Vector3(2,2,1),
      rotation: Quaternion.Euler(90,0,0),
    }))
    teleportDown.setParent(this)

    const teleportDownZone = new Entity()
    const teleportDownTriggerBox = new TriggerBoxShape(new Vector3(2.5,3,2))
    const teleportDownTriggerComponent = new TriggerComponent(teleportDownTriggerBox, {
      onCameraEnter: () => {
        log('ENTER DOWN')
        movePlayerTo(groundCoords, new Vector3(floorCords.x, 2.88, floorCords.z))
      },
      // enableDebug: true
    })
    teleportDownZone.addComponent(new Transform({
      position: new Vector3(0,0,-1.5),
      scale: new Vector3(1,1,1)
    }))
    teleportDownZone.addComponent(teleportDownTriggerComponent)
    teleportDownZone.setParent(teleportDown)
  }
}
