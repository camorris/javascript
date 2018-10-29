Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root 'elements#index'

get '/elements' => 'elements#index', as: :elements
get '/elements/new' => 'elements#new', as: :new_element
get '/elements/:id' => 'elements#show', as: :element
post '/elements' => 'elements#create'
get '/elements/:id/edit' => 'elements#edit', as: :edit_element
patch '/elements/:id' => 'elements#update'
delete '/elements/:id' => 'elements#destroy'

end
