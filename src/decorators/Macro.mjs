import { Macroable } from '../Macroable.mjs'

/**
 * Macro decorator to mark a class as macroable.
 *
 * @return {any}
 */
export const Macro = (target) => {
  return Object.defineProperties(target, Object.getOwnPropertyDescriptors(Macroable))
}
