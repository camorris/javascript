tut_percentage = {
    'jason' => 21,
    'chase' => 21,
    'luc' => 42,
    'andrew' => 52,
    'ryan' => 63,
    'anthony' => 42,
    'nate' => 15,
    'phil' => 12,
    'dave' => 63,
    'chakrit' => 68,
    'mihir' => 52,
    'harold' => 42,
    'kevin' => 42,
    'kate' => 47,
    'cole' => 26
}

sorted =  tut_percentage.sort_by {|name, percentage| percentage}
# p sorted
pairs = []
for i in 0..(sorted.size/2).to_i
    p pairs[i] = sorted[i] + sorted[-i - 1]
end
p pairs