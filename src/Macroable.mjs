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
  }

  static mixin (mixin, replace = true) {
    for (const [name, value] of Object.entries(Object.getOwnPropertyDescriptors(mixin))) {
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
    if (!name) {
      throw new Error('The first argument must be a valid string.')
    }

    if (!(typeof macro === 'function' || (typeof macro === 'object' && macro.value))) {
      throw new Error('The second argument must be a function or a property descriptor')
    }
  }
}