class Person
    def initialize (nombre, edad, colour)
        @name = nombre
        @age = edad
        @color = colour
    end
    def yell_name # this is the name of a method called yell_name
        p @name.upcase
    end
    def say_age
        p @age
    end
    def show_color
        p @color
    end
end

hottie = Person.new('Scarlett Johannson', 25, 'brown')
p hottie
hottie.yell_name

sexy = Person.new('Zoey Zendaya', 21, 'light-brown')
sexy.yell_name
sexy.show_color