class CreateGuitars < ActiveRecord::Migration[5.1]
  def change
    create_table :guitars do |t|
      t.string :amplifications
      t.integer :number_of_strings
      t.string :color
      t.string :size

      t.timestamps
    end
  end
end
