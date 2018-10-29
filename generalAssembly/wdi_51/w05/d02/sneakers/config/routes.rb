Rails.application.routes.draw do
 

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root 'sneakers#index'
get '/sneakers' => 'sneakers#index'
get '/sneakers/:id' => 'sneakers#show'
end
