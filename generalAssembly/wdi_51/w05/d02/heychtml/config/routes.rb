Rails.application.routes.draw do
  root 'quotes#index' 
  resources :quotes, only: [:index, :show]
# OOOORRRRR
  resources :quotes, except: [:edit]

  # above is the shortcut for the below code

  # # index, lists all quotes
  # get '/quotes' => 'quotes#index', as: :quotes

  # # new, display a form to add a new quote
  #   get '/quotes/new' => 'quotes#new', as: :new_quote

  # # show, show a specific quote
  # get '/quotes/:id' => 'quotes#show', as: :quote

  # # create, actually save the new quote to the database
  # post '/quotes' => 'quotes#create'

  # # edit, display a form to edit existing quote
  # get '/quotes/:id/edit' => 'quotes#edit', as: :edit_quote

  # #update, actually update the quote in the database
  # patch '/quotes/:id' => 'quotes#update'

  # #destroy, re,ove a quote from the database
  # delete '/quotes/:id' => 'quotes#destroy'
end

