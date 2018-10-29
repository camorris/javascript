raclass CreateQuotes < ActiveRecord::Migration[5.1]
  def change
    create_table :quotes do |t|
      t.string :topic
      t.string :body
      t.integer :fp_pos

      t.timestamps
    end
  end
end
