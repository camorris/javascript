# do you play banjo? my attempt
print "Type your name"
banjo_player = gets.chomp
banjo_player.downcase!

    if banjo_player.include? "R"
        p "You can Play"
    else 
        p "You Can't Play...kick rocks"
    end
#  how it was done in class
    def plays_banjo?(name)
        if name[0].downcase == 'r'
            "#{name} plays the banjo"
        else    
            "#{name} does not play the banjo"
        end
    end
# vowel counter
    def vowel_count(str)
        str.downcase.count('aeiou')
    end

    p vowel_count "hello world"

# count stuff

def count_by(x, n)
    result = []
    n.times do |i|
    result.push x * (i + 1)
    end
    result
end

p count_by(10, 5)
