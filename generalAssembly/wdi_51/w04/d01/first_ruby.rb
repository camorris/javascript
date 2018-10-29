# this is how you comment
# this is a variable:
f_name = "Chase"
l_name = "Morris"
integer = 7
floats = 4.2
booleans = true

# string interpolation
p " This man " + f_name + " " + l_name + " designs websites for legends."
# or
p "This man #{f_name} #{l_name} designs websites for legends."

# functions in ruby are ALWAYS methods
def say_hello_to f_name
    p "hello #{f_name}!"
end

my_array = ["banana", "mango", "mint", "pineapple", "lemon"]
p my_array.reverse!
p my_array.reverse
p my_array.any?

