export default class SoundSource extends Entity {
  audioClip: AudioClip
  audioSource: AudioSource
  constructor (path: string) {
    super()
    this.audioClip = new AudioClip(path)
    this.audioSource = new AudioSource(this.audioClip)

    this.audioSource.volume = 0.5
    this.audioSource.loop = true
    this.audioSource.playing = true

    this.addComponent(this.audioSource)
  }
}
