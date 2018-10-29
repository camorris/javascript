# This file is a transcript of the IRB session shown in the movie.
# You should be able to cut and paste it into IRB to get 
# the same results shown in the comments.

# irb --simple-prompt
1.upto(5) do |num|
  puts "Hello " + num.to_s
end
# Hello 1
# Hello 2
# Hello 3
# Hello 4
# Hello 5
# => 1
fruits = ['banana', 'apple', 'pear']
# => ["banana", "apple", "pear"]
fruits.each do |fruit|
  puts fruit.capitalize
end
# Banana
# Apple
# Pear
# => ["banana", "apple", "pear"]
for fruit in fruits #this is the samething as above just wrote differently
  puts fruit.capitalize
end
# Banana
# Apple
# Pear
# => ["banana", "apple", "pear"]
quit
# integers/floats iterators
# times,upto,downto,step

#range iterators
#each,step

# string iterators
#each, each line, each_byte

# array iterators
# each, each_index, each_with_index

# hash iterators
# each, each_key, each_value, each_par