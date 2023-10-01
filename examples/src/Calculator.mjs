export class Calculator {
  static NAME = 'Calculator'

  get name () {
    return Calculator.NAME
  }

  add (...values) {
    return values.reduce((prev, curr) => prev + curr, values.shift())
  }

  subtract (...values) {
    return values.reduce((prev, curr) => prev - curr, values.shift())
  }

  multiply (...values) {
    return values.reduce((prev, curr) => prev * curr, values.shift())
  }

  divide (...values) {
    return values.reduce((prev, curr) => prev / curr, values.shift())
  }
}