# This file is a transcript of the IRB session shown in the movie.
# You should be able to cut and paste it into IRB to get 
# the same results shown in the comments.
# symbols are a label that are used to identify a piece of data
# irb
:test # : makes it a symbol 
# => :test
:this_test
# => :this_test
"test".object_id
# => 26340
:test.object_id
# => 80818
"test".object_id
# => 285760
:test.object_id
# => 80818
hash = {:first_name => 'Kevin', :last_name => 'Skoglund'} # this allows us to not have to create a new bit of memeory wew conserve the amount of memory our computer uses
# => {:first_name=>"Kevin", :last_name=>"Skoglund"}
hash['first_name'] # there is no string object called first name as a key
# => nil
hash[:first_name] # there is n
# => "Kevin"
:test = 1
# SyntaxError: compile error
# (irb):10: syntax error, unexpected '=', expecting $end
# :test = 1
#        ^
# 	from (irb):10
# 	from :0
quit
