class CreateSneakers < ActiveRecord::Migration[5.1]
  def change
    create_table :sneakers do |t|
      t.string :brand
      t.integer :size
      t.string :color
      t.float :price

      t.timestamps
    end
  end
end
