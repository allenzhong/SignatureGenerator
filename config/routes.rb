Rails.application.routes.draw do
  root 'signatures#index'
  get 'signatures/index'
  resources :signatures
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
