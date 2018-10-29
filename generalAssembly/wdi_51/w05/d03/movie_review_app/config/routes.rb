Rails.application.routes.draw do
  get 'movies/:id' => 'movies#show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
