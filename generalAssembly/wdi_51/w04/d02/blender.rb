class Blender
    @@count = 0
    def initialize make, model, price
        @@count += 1
        @make = make
        @model = model
        @price = price
        @power_on = false
    end
    def self.count
        @@count
    end

    attr_reader :make, :model
    attr_accessor :price

    def toggle_power
        @power_on = !@power_on
    end

    def blend(ingredients)
        if @power_on == true
            return ingredients.join('').split('').shuffle.join('')
        else
            ingredients   
        end
    end
 end
ingredients = ['mango', 'pineapple', 'blueberries']
my_blender = Blender.new('Samurai', "5100", 24.55)
my_blender.toggle_power
p my_blender.blend ingredients

p Blender.count
