Rails.application.routes.draw do
  root 'sandwiches#index'
  resources :users
  resources :sessions, only: [:new, :create]
  delete '/logout' => 'sessions#destroy', as: :logout
  resources :sandwiches
end
