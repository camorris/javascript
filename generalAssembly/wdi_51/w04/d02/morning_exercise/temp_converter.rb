p 'the arguments are'
p ARGV
value = ARGV[0].to_i
in_unit = ARGV[1]
out_unit = ARGV[2]
result = 0

if in_unit == 'c'
    if out_unit == 'k'
        result = value + 273.15
    elsif out_unit == 'f'
        result = value * 1.8 + 32
    end
end

if in_unit == 'k'
    if out_unit == 'c'
        result = value - 273.15
    end
end
# <---This is where we will be using methods---> #
def c_to_k (amount)
    return amount + 273.15
end
def c_to_f (amount)
    return result = amount * 1.8 + 32
end
def k_to_c (amount)
    return result = amount - 273.15
end
def k_to_f (amount)
    result_celsius = k_to_c amount
    result = c_to_f result_celsius
    return result
end

if in_unit == 'c' and out_unit == 'k'
    result = c_to_k value
if in_unit == 'c' and out_unit == 'f'
    result = c_to_f value
if in_unit == 'k' and out_unit == 'c'
    result = k_to_c value
if 

p result

p 'What is your favorite superhero?'
ans = STDIN.gets.chomp
p ans * 3