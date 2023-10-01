import { App } from "./App.mjs"
import { Calculator } from "./Calculator.mjs"

App
  .mixin(Calculator)
  .macro('welcome', function () {
    console.log('I can do many things...')
  })

const app = new App()

app.welcome()

console.log('my name is:', app.name)

console.log('addition:', app.add(1,2,3))
console.log('subtraction:', app.subtract(12,6,4,1))
console.log('multiplication:', app.multiply(1,2,3))
console.log('division:', app.divide(50,2,5))