Rails.application.routes.draw do
  devise_for :users
  resources :apartments
  
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: 'pages#index'
end
