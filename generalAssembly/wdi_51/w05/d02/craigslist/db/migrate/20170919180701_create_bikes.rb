class CreateBikes < ActiveRecord::Migration[5.1]
  def change
    create_table :bikes do |t|
      t.string :brand
      t.integer :gears
      t.string :color
      t.string :model
      t.boolean :new

      t.timestamps
    end
  end
end
