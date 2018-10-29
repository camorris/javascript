# List array of titles
=begin
list = "The Frog King, or Iron Henry
Our Lady's Child
The Story of a Youth Who Went Forth to Learn What Fear Was
The Wolf and the Seven Little Kids
Faithful John
The Good Bargain
The Twelve Brothers
Brother and Sister
Rapunzel
The Three Little Men in the Wood
The Three Spinners
Hansel and Grethel (called Gretel in this version)
The Three Snake-Leaves
The White Snake
The Valiant Little Tailor
Cinderella
The Riddle
Mother Holle
The Seven Ravens
Little Red-Cap
The Singing Bone
The Devil with the Three Golden Hairs
The Girl Without Hands
Clever Hans
The Three Languages
Clever Elsie
The Wishing-Table, The Gold-Ass, and The Cudgel in the Sack
Thumbling
The Elves (two stories)
The Robber Bridegroom
The Godfather
Frau Trude
Godfather Death
Thumbling as Journeyman
Fitcher's Bird
The Juniper-Tree
Old Sultan
The Six Swans
Little Briar-Rose
Fundevogel
King Thrushbeard
Little Snow-White
The Knapsack, The Hat, and The Horn
Rumpelstiltskin
Sweetheart Roland
The Golden Bird
The Two Brothers
The Queen Bee
The Three Feathers
The Golden Goose
Allerleirauh
The Hare's Bride
The Twelve Huntsmen
The Thief and His Master
The Three Sons of Fortune
How Six Men Got On in the World
Gossip Wolf and the Fox
The Pink
The Old Man and His Grandson
The Water-Nix
Brother Lustig
Hans in Luck
Hans Married
The Gold-Children
The Singing, Soaring Lark
The Goose-Girl
The Young Giant
The Elves (another story with that title)
The King of the Golden Mountain
The Raven
The Peasant's Wise Daughter
The Three Little Birds
The Water of Life
The Spirit in the Bottle
The Devil's Sooty Brother
Bearskin
The Willow-Wren and the Bear
Sweet Porridge
Wise Folks
Stories About Snakes (called paddocks in this version)
The Poor Miller's Boy and the Cat
The Two Travellers
Hans the Hedgehog
The Shroud
The Skilful Huntsman
The Two Kings' Children
The Cunning Little Tailor
The Bright Sun Brings It to Light
The Blue Light
The Wilful Child
The King's Son Who Feared Nothing
Donkey Cabbages
The Old Woman in the Wood
The Three Brothers
The Devil and His Grandmother
Ferdinand the Faithful
The Iron Stove
The Four Skilful Brothers
One-Eye, Two-Eyes, and Three-Eyes
Fair Katrinelje and Pif-Paf-Poltrie
The Shoes That Were Danced to Pieces
The Six Servants
The White Bride and the Black One
Iron John
The Three Black Princesses
Knoist and His Three Sons
The Maid of Brakel
Domestic Servants
The Lambkin and the Little Fish
Simeli Mountain
Going A-Travelling
The Donkey
The Ungrateful Son
The Turnip
The Old Man Made Young Again
The Three Sluggards
The Shepherd Boy
The Star-Money
The Stolen Farthings
Brides On Their Trial
The Sparrow and His Four Children
Snow-White and Rose-Red
The Glass Coffin
Lazy Harry
The Griffin
Strong Hans
The Hut in the Forest
The Goose-Girl at the Well
Eve's Various Children
The Nix of the Mill-Pond
The Poor Boy in the Grave
The True Sweetheart
The Spindle, The Shuttle, and The Needle
The Sea-Hare
The Master-Thief
The Drummer
The Ear of Corn
Old Rinkrank
The Crystal Ball
Maid Maleen
St. Joseph in the Forest
The Twelve Apostles
The Rose
Poverty and Humility Lead to Heaven
God's Food
The Three Green Twigs
The Aged Mother
The Hazel-Branch
Cat and Mouse in Partnership
The Wonderful Musician
The Pack of Ragamuffins
The Straw, the Coal, and the Bean
The Fisherman and His Wife
The Mouse, the Bird, and the Sausage
The Bremen Town-Musicians
The Louse and the Flea
The Tailor in Heaven
The Wedding of Mrs. Fox (two stories)
The Elves (one more story)
Herr Korbes
The Dog and the Sparrow
Frederick and Catherine
The Little Peasant
Jorinda and Joringel
The Wolf and the Man
The Wolf and the Fox
The Fox and the Cat
Clever Grethel (called Gretel in this version)
The Death of the Little Hen
Gambling Hansel
The Fox and the Geese
The Poor Man and the Rich Man
Old Hildebrand
Doctor Knowall
The Jew Among Thorns
The Flail from Heaven
The Three Army-Surgeons
The Seven Swabians
The Three Apprentices
The Lazy Spinner
The Fox and the Horse
The Lord's Animals and the Devil's
The Beam
The Old Beggar-Woman
Odds and Ends (called hurds in this version)
The Story of Schlauraffen Land
The Ditmarsch Tale of Wonders
A Riddling Tale
The Wise Servant
The Peasant in Heaven
Lean Lisa
Sharing Joy and Sorrow
The Willow-Wren
The Sole
The Bittern and the Hoopoe
The Owl
The Moon
The Duration of Life
Death's Messengers
Master Pfriem
The Little Folks' Presents
The Giant and the Tailor
The Nail
The Hare and the Hedgehog
The Peasant and the Devil
The Crumbs on the Table
The Grave-Mound
The Boots of Buffalo-Leather
The Golden Key (end missing)"

arr = list.split("\n")
=end

# CODE TO DOWNLOAD EACH FILE

# for i in '001'..'209'
#    `wget https://www.cs.cmu.edu/~spok/grimmtmp/#{i}.txt -O "#{i}.txt"`
# end

# Read the file and count the characters

# go through the file and count characters

char_count = []
general_hash = Hash.new(0)
# frequencies = Hash.new(0)
for i in '001'..'209'
    frequencies = Hash.new(0)
    f = File.open "#{i}.txt", 'r'
        count = f.size
        char_count.push(count)
        # go through the file,count the words and frequencies.
        words = f.read.split 
        clean_words = words.each { |w| w.tr!("!@#$%^&*()-/.?:; ,'\"","")} 
        clean_words.each { |el| frequencies[el] += 1}
        clean_words.each { |el| general_hash[el] += 1}
        # sort the "Frequencies" and convert it to hash.
        sorted_frequencies_hash = frequencies.sort_by { |k, v| v }.reverse.to_h
        sorted_general_hash = general_hash.sort_by { |k, v| v }.reverse.to_h
        #Create a report file and add character count and the hash of words to that file.
        # my_report = File.open i + ' Report.txt', 'w'
        # my_report.write "#{i} Report\n"
        # my_report.write "The character count is #{char_count[(i.to_i) - 1]}  \n"
        # my_report.write "#{sorted_frequencies_hash}"
        # my_report.close
end
# p sorted_general_hash
g = File.open 'General report.txt', 'w'
g.write "General report \n"
g.write "Below is the list of words with their frequency: \n"
g.write "#{sorted_general_hash}"
g.close 

html_file = File.open 'General Report for the Tales.html', 'w'
html_file.write "<h1> GENERAL REPORT </h1> \n"
html_file.write "<h2> These are the most frequently used words:</h2> \n"
html_file.write "<ul> \n"
sorted_general_hash.each { |w, c| html_file.write "<li>#{w}: #{c}</li> \n"}
html_file.write "</ul>"
html_file.close