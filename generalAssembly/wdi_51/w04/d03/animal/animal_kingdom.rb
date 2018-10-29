#in this exercise we are gong over inheritance.
class Animal
    def initialize name
        @name = name
        @eats = true
        @alive = true
        @sleep = false
    end
    attr_accessor :name
    attr_reader :alive

    def die
        @alive = false
    end
    def sleep 
        @sleep = true
    end
end
class Dog < Animal
    def initialize name, breed= "unknown"
        super(name)
        @breed = breed
    end

    attr_reader :breed

    def bark
        p "woof woof"
    end
end
 class Wolf < Dog
    def Howl
        p "OOOOOOWWWWWW"
    end
class Bird < Animal
    def initialize name, color
        super(name)
        @color = color
    end
    
    attr_reader :color

    def squawk
        p "CAWWWWW CAWWWWW"
    end
class Fish < Animal
    def initialize name, species
        super(name)
        @species = species
    end

    attr_reader :species

    def swim
        p "glooop glooop"
    end
end

my_dog = Dog.new("Sisco", "Pit Bull")
p my_dog.class.superclass.
my_bird = Bird.new("Pauly", "eagle")
p my_bird.sleep
p my_dog.die
my_fish = Fish.new