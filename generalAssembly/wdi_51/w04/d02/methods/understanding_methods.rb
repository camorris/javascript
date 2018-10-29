def greet(name)
    p 'Hello ' + name
end

greet 'Chase'
#  another example
def shout(phrase)
    p phrase.upcase
end

shout 'hi there'
#  another example
def greet(name, age)
    if age > 25
        p "Good Morning, " + name
    else
        p "Whats up yo?!?!?"
    end


greet 'Monica', 26
greet 'Caden', 13