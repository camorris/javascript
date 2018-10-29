Rails.application.routes.draw do
  get 'movies/new' => 'movies#new'
  get 'movies/:id' => 'movies#show', as: :movie
  post 'movies' => 'movies#create'
  get 'reviews/new' => 'reviews#new'
  post 'reviews' => 'reviews#create'
end
