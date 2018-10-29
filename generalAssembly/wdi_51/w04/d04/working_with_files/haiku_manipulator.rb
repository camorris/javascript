# create a pointer to the file
f = File.open 'haiku.txt', 'r'
#read all the lines into an array
haiku_lines = f.readlines
# print all the lines to the screen
# and get rid of the /n of each line
haiku_lines.each {|the_line| p the_line.chomp}
}