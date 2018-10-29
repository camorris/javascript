class CreateRants < ActiveRecord::Migration[5.1]
  def change
    create_table :rants do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
