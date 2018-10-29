def greet (name, greeting)
    p "#{greeting}, #{name}"
end

greet 'arthur', 'howdy'

def say_hi()
    p 'hi, there'
end

say_hi

def the_executer()
    p 'hello before yielding'
    yield
    p 'after yielding'
end

the_executer 