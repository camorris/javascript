Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
#verb location => controller_name#action_run
get'/' => 'welcome#greet'
get '/turtles' => 'welcome#turtle_printer'

end
