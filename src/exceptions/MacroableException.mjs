/**
 * Class representing a MacroableException.
 */
export class MacroableException extends Error {
  static CODE = 'MACRO-500'

  constructor (message, metadata = {}) {
    super()
    this.message = message
    this.metadata = metadata
    this.code = MacroableException.CODE
    this.name = 'stonejs.macro.macroable'
  }
}
