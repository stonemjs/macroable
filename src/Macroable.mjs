import { MacroableException } from './exceptions/MacroableException.mjs'

/**
 * Class representing a Macroable.
 *
 * @author Mr. Stone <pierre.evens16@gmail.com>
 */
export class Macroable {
  static macro (name, macro) {
    this._validateMacro(name, macro)

    this._macros ??= new Map()
    this._macros.set(name, macro)

    if (typeof macro === 'function') {
      this[name] = macro
      this.prototype[name] = macro
    } else {
      Object.defineProperty(this, name, macro)
      Object.defineProperty(this.prototype, name, macro)
    }

    return this
  }

  static mixin (mixin, replace = true) {
    const entries = Object
      .entries({
        ...Object.getOwnPropertyDescriptors(mixin),
        ...Object.getOwnPropertyDescriptors(mixin.prototype ?? {})
      })
      .filter(([name]) => !['length', 'prototype'].includes(name))

    for (const [name, value] of entries) {
      if (replace || !this.hasMacro(name)) {
        this.macro(name, value)
      }
    }

    return this
  }

  static hasMacro (name) {
    return this._macros?.has(name)
  }

  static getMacro (name) {
    return this._macros?.get(name)
  }

  static flushMacros () {
    for (const key of this._macros?.keys()) {
      Reflect.deleteProperty(this.prototype, key)
    }

    this._macros?.clear()

    return this
  }

  static _validateMacro (name, macro) {
    if (typeof name !== 'string') {
      throw new MacroableException('The first argument must be a valid string.')
    }

    if (!(typeof macro === 'function' || typeof macro === 'object')) {
      throw new MacroableException('The second argument must be a function or a property descriptor.')
    }

    return this
  }
}
