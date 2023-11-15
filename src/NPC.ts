import { ButtonStyles, CustomDialogButton, Dialog, NPC } from '@dcl/npc-scene-utils'
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
  dialogIdx: number = 0
  standardDialogBtn1 = this.dialog.button1
  isInteracted: boolean = false

  dialogScript = [
    { // 0
      text: 'Welcome to Warsaw School of Economics metaverse bar! Would you like to have a drink?',
      isQuestion: true,
      buttons: [
        {
          goToDialog: 1,
          triggeredActions: () => {
            this.checkDialogIdx(1)
          },
          label: 'Yes'
        },
        {
          goToDialog: 4,
          label: 'No',
          triggeredActions: () => {
            this.checkDialogIdx(4)
          }
        }
      ]
    },
    { // 1
      text: 'Stay tuned then! This bar functions as a testing environment for upcoming blockchain transactions. It\'s a project under the auspices of Blockchain Society Poland.'
    },
    { // 2
      text: 'Once the project concludes, you\'ll receive your favorite drink. Interested in becoming a part of our blockchain project?',
      isQuestion: true,
      buttons: [
        {
          goToDialog: 3,
          label: 'Yes',
          triggeredActions: () => {
            this.checkDialogIdx(3)
          }
        },
        {
          goToDialog: 4,
          label: 'No',
          triggeredActions: () => {
            this.checkDialogIdx(4)
          }
        }
      ]
    },
    { // 3
      text: 'Contact us via our LinkedIn http://bit.ly/40C8dhF',
      isQuestion: true,
      buttons: [
        {
          goToDialog: 3,
          label: 'Linkedin (Click)',
          triggeredActions: () => {
            this.checkDialogIdx(3)
          }
        }
      ]
    },
    { // 4
      text: 'Have a nice stay then. There is a nice exhibition on the rooftop.',
      isEndOfDialog: true,
      isQuestion: true,
      buttons: [
        {
          goToDialog: 4,
          label: 'Bye',
          triggeredActions: () => {
            this.checkDialogIdx(0)
            this.dialog.closeDialogWindow()
          }
        }
      ],
      triggeredByNext: () => {
        this.onWalkAway()
        this.checkDialogIdx(0)
      }
    }
  ]

  constructor (
    name: string,
    model: string,
    position: TransformConstructorArgs
  ) {
    super(
      position,
      model,
      () => {
        if (this.isInteracted) return
        this.isInteracted = true
        this.stopWalking()
        this.talk(this.dialogScript)
      },
      {
        walkingAnim: 'Walk',
        idleAnim: 'Idle',
        onlyClickTrigger: true,
        reactDistance: 5, //number;
        walkingSpeed: 15,
        continueOnWalkAway: true,
        coolDownDuration: 3,
        darkUI: true,
        faceUser: true
      }
    )
    this.walkToNextPoint()
  }

  checkDialogIdx = (idx: number) => {
    this.dialogIdx = idx

    if (this.dialogIdx === 3) {

      this.dialog.button1 = new CustomDialogButton(
        this.dialog.container,
        this.dialog.uiTheme,
        'Click',
        150 * 0.75,
        -65 * 0.75,
        () => {
          log('dialogIdx', this.dialogIdx)
          if (this.dialogIdx !== 3) {
            this.dialog.closeDialogWindow()
            this.endInteraction()
            this.handleWalkAway()
            return
          }
          openExternalURL('https://bit.ly/40C8dhF')
          this.dialog.confirmText(1)
          this.dialog.closeDialogWindow()
          this.dialog.openDialogWindow(this.dialogScript, 4)
          this.dialogIdx = 4
        },
        false,
        ButtonStyles.RED
      )
    } else {
      this.dialog.button1 = this.standardDialogBtn1
    }
  }

  endInteraction () {
    super.endInteraction()
    this.isInteracted = false
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
          if (this.isInteracted) return
          this.walkToNextPoint(nextPos)
        })
      },
      speed: 1
    })
  }
}
