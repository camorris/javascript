class CreateElements < ActiveRecord::Migration[5.1]
  def change
    create_table :elements do |t|
      t.string :name
      t.string :symbol
      t.integer :proton_count
      t.string :chemical_property

      t.timestamps
    end
  end
end
