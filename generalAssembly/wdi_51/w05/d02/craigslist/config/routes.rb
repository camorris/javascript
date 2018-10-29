Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/rants' => 'rants#index'
  get '/rants/:id' => 'rants#show'
  get '/boats' => 'boats#index'
  get '/bikes' => 'bikes#index'
end
