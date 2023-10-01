import { Macroable } from '../Macroable.mjs'

/**
 * Macro decorator to mark a class as macroable.
 *
 * @return {any}
 */
export const Macro = (target) => {
  const entries = Object
    .entries(Object.getOwnPropertyDescriptors(Macroable))
    .filter(([name]) => !['length', 'prototype'].includes(name))

  for (const [name, value] of entries) {
    if (!target[name]) {
      Object.defineProperty(target, name, value)
    }
  }

  return target
}
