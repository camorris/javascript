# This file is a transcript of the IRB session shown in the movie.
# You should be able to cut and paste it into IRB to get 
# the same results shown in the comments.
# allows us to lable referred to as dictionaries in other langauges
# irb
person = ['Chase', "Morris", 'male', 'brown', 'black']
# => ["Chase", "Morris", "male", "brown", "black"]
person = { 'first_name' => 'Chase', 'last_name' => 'Morris' } # curly braces signifier of hash
# => {"first_name"=>"Chase", "last_name"=>"Morris"}
person['first_name'] # allows us to point out the object index
# => "Chase"
person['last_name'] # allows us to point out the object index
# => "Morris"
person.index('Chase') # returns the key to us by searching through the value
# => "first_name"
mixed = {1 => ['a', 'b', 'c'], 'hello' => 'world', [10,20] => 'top'} # dont count on order in a mixed hash
# => {[10, 20]=>"top", 1=>["a", "b", "c"], "hello"=>"world"}
mixed
# => {[10, 20]=>"top", 1=>["a", "b", "c"], "hello"=>"world"}
mixed[1] # return the thing labled 1
# => ["a", "b", "c"]
mixed[[10,20]] # return the value
# => "top"
mixed.keys
# => [[10, 20], 1, "hello"]
mixed.values
# => ["top", ["a", "b", "c"], "world"]
mixed.length
# => 3
mixed.size
# => 3
mixed.to_a
# => [[[10, 20], "top"], [1, ["a", "b", "c"]], ["hello", "world"]]
mixed.clear
# => {}
mixed = {}
# => {}
person
# => {"first_name"=>"Kevin", "last_name"=>"Skoglund"}
person['gender'] = 'male'
# => "male"
person
# => {"gender"=>"male", "first_name"=>"Kevin", "last_name"=>"Skoglund"}
quit
