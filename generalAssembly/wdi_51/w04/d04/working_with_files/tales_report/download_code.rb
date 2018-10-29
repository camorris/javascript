
#<---So this is how you download the files--->
# for i in '001'..'209'
# `wget https://www.cs.cmu.edu/~spok/grimmtmp/#{i}.txt -O "#{i}.txt"`
# end

#read the file and count the characters

char_count = []
frequencies = Hash.new(0)
for i in '001'..'209'
    f = File.open "#(i).txt", 'r'
    count = f.size
    char_count.push(count)
    #go through the file and count the words

    words = f.read.split
    clean_words = words.each { |w| w.tr!("!@#$%^&*()- ,'\"","")}
    clean_words.each { |el| frequencies[el] +=1}
    word_frequencies_hash = frequencies.sort_by { |k, v| v }.reverse.to_h
    #p word_frequencies_hash

    p "#{char_count[(i.to_i)-1]} character in this file"
end