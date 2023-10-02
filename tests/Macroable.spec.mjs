import { Macroable } from '../src/index.mjs'
import { MacroableException } from '../src/exceptions/MacroableException.mjs'

describe('Macroable', () => {
  describe('macro', () => {
    it('should throw an `MacroableException` for invalid name', function () {
      // Assert
      this.assert.throws(
        () => Macroable.macro(true, () => {}),
        MacroableException,
        'The first argument must be a valid string.'
      )
    })

    it('should throw an `MacroableException` for invalid macro', function () {
      // Assert
      this.assert.throws(
        () => Macroable.macro('name', true),
        MacroableException,
        'The second argument must be a function or a property descriptor.'
      )
    })
  })
})
