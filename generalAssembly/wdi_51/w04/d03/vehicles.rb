class Commonality
    def initialize name, price, color
        @name = name
        @price = price
        @color = color
        @owned = true
    end
    attr_accessor :name, :price, :color
    attr_reader :owned

    def oneday
        @owned = false
    end
end
class Planes < Commonality
    def initialize name, price, color
        super(name, price, color)
        
    end
    def ability
         "I can Fly"
    end
end
class Cars < Commonality
    def initialize name, price, color
        super(name, price, color)
        
    end
    def ability
         "I can roll really fast"
    end
end
class Motorcycles < Commonality
    def initialize name, price, color
        super(name, price, color)
       
    end
end
class Boats < Commonality
    def initialize name, price, color
        super(name, price, color)
    end
end
class Gocarts < Cars
    def initialize name, price, color
        super(name,price,color)
    
    end
end

my_plane = Planes.new("f-22", 123456789, "black")
p my_plane.ability
my_car = Cars.new("altime", 1, "gold")
p my_car.ability