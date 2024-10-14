class GuessingGame {
  constructor() {}

  setRange(min, max) {
    ;(this.min = min), (this.max = max)
  }

  guess() {
    let sum = this.max + this.min
    return Math.round(sum / 2)
  }

  lower() {
    this.max = this.guess()
  }

  greater() {
    this.min = this.guess()
  }
}

module.exports = GuessingGame
