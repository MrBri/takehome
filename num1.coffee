# Since the example given doesn't have a parameter on the start method
# I'm assuming its a setter method.

class Engine
  constructor: (@running) ->

  start: () ->
    @running = true

class Car extends Engine
  turnKey: () ->
    if this.running
      "Car is already running"
    else
      this.start()
      "Car is now started"

ford = new Car true
chevy = new Car false
console.log ford.turnKey()
console.log chevy.turnKey()
