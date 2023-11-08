import { Dialog, NPC } from '@dcl/npc-scene-utils'
import { RotateTransformComponent, setTimeout, TriggerBoxShape, TriggerComponent } from '@dcl/ecs-scene-utils'

const ANIM_TIME_PADD = .2
const NPC_ANIMATIONS = {
  WAVE: { name: 'Wave', duration: 2.46 },
  HEART_WITH_HANDS: { name: 'Heart_With_Hands', duration: 1.76 },
  COME_ON: { name: 'Come_On', duration: 1.96 }
}

const randomProperty = function(obj: { [key: string]: { name: string, duration: number } }) {
  const keys = Object.keys(obj)
  return obj[keys[Math.floor(keys.length * Math.random())]]
}

export class CustomNPC extends NPC {
  followPathTimeout: Entity | undefined

  constructor (
    name: string,
    model: string,
    position: TransformConstructorArgs
  ) {
    super(
      position,
      model,
      () => {
        // this.talkBubble([
        //   {
        //     text: 'Hej. Milo Cie widziec <3',
        //     timeOn: 4,
        //     typeSpeed: 100,
        //     isEndOfDialog: true
        //   }
        // ], 0)
      },
      {
        walkingAnim: 'Walk',
        idleAnim: 'Idle',
        onlyExternalTrigger: true,
        // reactDistance: 5, //number;
        walkingSpeed: 15,
        continueOnWalkAway: true,
        coolDownDuration: 3,
        darkUI: true
      }
    )

    this.walkToNextPoint()
  }

  onWalkAway = () => {
    log('onWalkAway')
    this.endInteraction()
    this.walkToNextPoint()
  }

  walkToNextPoint = (prevPos?: Vector3) => {
    if (!prevPos) prevPos = this.getComponent(Transform).position

    const step = 10
    const xStep = Number((Math.random() * step).toFixed(2))
    const xDirection = Math.random() > 0.5 ? -1 : 1
    const xBorder = [-37, -23]

    let xMove = Number(Math.max(xBorder[0], Math.min(xStep * xDirection + prevPos.x, xBorder[1])).toFixed(2))

    if (xMove === prevPos.x && xMove === xBorder[1]) {
      xMove -= Number((Math.random() * step + 1).toFixed(2))
    }

    if (xMove === prevPos.x && xMove === xBorder[0]) {
      xMove += Number((Math.random() * step + 1).toFixed(2))
    }

    const nextPos = new Vector3(xMove, 2.05, -10)

    this.followPath({
      startingPoint: 0,
      loop: false,
      path: [prevPos, nextPos],
      onFinishCallback: () => {
        const currTransform = this.getComponent(Transform)
        this.addComponent(new RotateTransformComponent(currTransform.rotation, Quaternion.Euler(0, -180, 0), 1))

        this.walkingAnim?.stop()
        this.walkingAnim?.reset()

        const anim = randomProperty(NPC_ANIMATIONS)

        this.playAnimation(anim.name, true, anim.duration)

        this.followPathTimeout = setTimeout(anim.duration * 1000, () => {
          // if (this.isInteracted) return
          this.walkToNextPoint(nextPos)
        })
      },
      speed: 1
    })
  }
}
