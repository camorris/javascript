# its_raining = true
# wearing_raincoat = true
# am_naked = false
# if its_raining and  wearing_raincoat
#     p "grab the umbrella"
# end

# #or
# p "grab the umbrella" if wearing_raincoat and its_raining

# #or
# p "grab the umbrella" unless am_naked

# #while loop
# i = 0 
# while i < 10
#     p "Boom!"
#     i += 1
# end

# groceries = ["banana", "mango", "mint", "pineapple", "lemon"]

# groceries.each do |g|
#     puts g
# end

# students = ["Chase", "Harold", "Jason", "Anthony", "Katie"]

# students.each do |s|
#     puts "Hello #{s}, welcome to unit 2 of WDI.".upcase
# end

# puts students.last 2.shuffle

def area w, h
 return " width Cant be greater than 500" if w > 500
     w * h
end 
puts area 600, 20