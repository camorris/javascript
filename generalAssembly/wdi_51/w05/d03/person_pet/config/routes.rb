Rails.application.routes.draw do
 root 'people#index'

  get '/people' => 'people#index', as: :people
  get '/people/:id' => 'people#show', as: :person

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
