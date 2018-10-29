class CreateSandwiches < ActiveRecord::Migration[5.1]
  def change
    create_table :sandwiches do |t|
      t.string :bread
      t.string :cheese
      t.string :protein
      t.boolean :toasted
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
