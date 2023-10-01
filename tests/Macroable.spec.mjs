import { Macroable } from '../src/index.mjs'

describe('Macroable', () => {
  const macroable = new Macroable()

  beforeEach(() => {
    macroable.clear()
  })

  describe('test', () => {
    it('should return a resolved instance', function () {
      this.assert.equal('StoneJS', 'StoneJS')
    })
  })
})
