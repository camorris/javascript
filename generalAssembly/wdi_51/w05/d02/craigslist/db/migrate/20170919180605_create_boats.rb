class CreateBoats < ActiveRecord::Migration[5.1]
  def change
    create_table :boats do |t|
      t.integer :year
      t.integer :size
      t.string :color
      t.string :name
      t.string :condition
      t.integer :price

      t.timestamps
    end
  end
end
