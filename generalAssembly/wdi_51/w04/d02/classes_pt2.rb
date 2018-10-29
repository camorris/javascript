class Superhero
    def initialize (name, height, weight)
        @name = name #this is a instance variabele 
        @height = height
        @weight = weight
    end
#<---how do you get and set new superhero --->
#     #example 1
    attr_reader :name, :height, :weight #is the getter to access these methods
    attr_writer :name, :height, :weight #is the setter for all of these methods
   
#    #example 2
    attr_accessor :name, :height, :weight  # does both get and set the methods for certain properties
    
    def war_cry
       p  @name.upcase + !!!
       p "#{@name.upcase}!!!"
    end
    def name
        @name
    end
    def name= (new_name)
        @name = new_name
    end
    def height
        @height
    end
    def height= (new_height)
        @height = new_height
    end
    def weight 
        @weight
    end
    def weight= (new_weight)
        @weight = new_weight
    end
end

p first_hero = Superhero.new("Crimson Coder", 5, 225)

first_hero.weight