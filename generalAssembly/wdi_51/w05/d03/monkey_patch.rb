class Integer
    def is_odd?
        if self > 0
            (self - 1).is_even?
        else
            return false
        end
    end

    def is_even?
        if self > 0
            (self - 1).is_odd?
        else
            return true
        end
    end
end

puts 3.is_even?

# OOOORRRRR #

class Integer
    def is_odd?
self > 0 ? (self - 1).is_even? : false
    end
    def is_even?

self > 0 ? (self - 1)is_odd? : true
    end
end

puts 12.is_odd?

# OOOOOORRRRR

class Integer
    def is_odd?
    self.abs > 0 ? (self.abs - 1).is_odd? : false
    end
    def is_even?
        self.abs > 0 ? (self.abs - 1).is_even: true
    end
end
puts -3.0.is_even?

# there is a reverse method but make your own and call it backwardsify

class String
    def backwardsify
x
            str = ''
             for i in 0..(self.length - 1)
                str[i] = self[self.length - i -1]
             end
            
             return str
            end
        end
            
            