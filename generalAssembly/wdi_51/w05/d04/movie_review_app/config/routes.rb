Rails.application.routes.draw do
  root 'movies#index'
  get '/movies/new' => 'movies#new'
  get '/movies/:id' => 'movies#show', as: :movie
  post '/movies' => 'movies#create'
  
  get'/reviews/new' => 'reviews#new', as: :review
  
  post '/reviews/' => 'reviews#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
