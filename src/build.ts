import { TriggerBoxShape, TriggerComponent } from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import SoundSource from './soundSource'
import { NPC } from '@dcl/npc-scene-utils'
import { CustomNPC } from './NPC'

export class Build extends Entity {
  constructor () {
    super()

    const build = new Entity()
    build.addComponent(new GLTFShape('models/sgh-build_3.glb'))
    build.setParent(this)

    const groundCoords = new Vector3(59.39, 2.88, 15)
    const floorCords = new Vector3(68.23, 24, 13)

    const teleportUp = new Entity()
    teleportUp.addComponent(new Transform({
      position: new Vector3(-35.5, 4, -51.5),
      scale: new Vector3(2, 2, 1)
    }))
    teleportUp.setParent(this)

    const teleportUpZone = new Entity()
    const teleportUpTriggerBox = new TriggerBoxShape(new Vector3(2, 3, 2))
    const teleportUpTriggerComponent = new TriggerComponent(teleportUpTriggerBox, {
      onCameraEnter: () => {
        movePlayerTo(floorCords, new Vector3(68, 23.09, 16.5))
      }
      // enableDebug: true
    })
    teleportUpZone.addComponent(new Transform({
      position: new Vector3(0, 0, -1.5),
      scale: new Vector3(1, 1, 1)
    }))
    teleportUpZone.addComponent(teleportUpTriggerComponent)
    teleportUpZone.setParent(teleportUp)

    const teleportDown = new Entity()
    teleportDown.addComponent(new Transform({
      position: new Vector3(-28, 21.7, -54),
      scale: new Vector3(2, 2, 1),
      rotation: Quaternion.Euler(90, 0, 0)
    }))
    teleportDown.setParent(this)

    const teleportDownZone = new Entity()
    const teleportDownTriggerBox = new TriggerBoxShape(new Vector3(2.5, 3, 2))
    const teleportDownTriggerComponent = new TriggerComponent(teleportDownTriggerBox, {
      onCameraEnter: () => {
        movePlayerTo(groundCoords, new Vector3(59, 2.88, 19.10))
      }
      // enableDebug: true
    })
    teleportDownZone.addComponent(new Transform({
      position: new Vector3(0, 0, -1.5),
      scale: new Vector3(1, 1, 1)
    }))
    teleportDownZone.addComponent(teleportDownTriggerComponent)
    teleportDownZone.setParent(teleportDown)

    const audioSource1 = new SoundSource('sounds/SimpsonWave1995.mp3')
    audioSource1.addComponent(new Transform({
      position: new Vector3(-30, 2.88, -10)
    }))
    // audioSource1.addComponent(new BoxShape())
    audioSource1.setParent(this)

    const npc = new CustomNPC(
      'whiteRabbit',
      'models/whiteRabbit.glb',
      {
        position: new Vector3(-30, 2.05, -10),
      }

    )
    npc.setParent(this)

  }

}
