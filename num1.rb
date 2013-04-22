class Engine
  attr_reader :running

  def initialize
    @running = false
  end

  def start
    @running = true
  end
end

class Car < Engine
  def turnKey
    if self.running
      return "Already running."
    else
      self.start()
      return "Started and running."
    end
  end
end

ford = Car.new
chevy = Car.new
puts chevy.start()
puts chevy.turnKey()
puts ford.turnKey()