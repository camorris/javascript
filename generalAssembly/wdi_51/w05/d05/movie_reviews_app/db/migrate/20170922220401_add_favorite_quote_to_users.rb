class AddFavoriteQuoteToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :favorite_quote, :string
  end
end
