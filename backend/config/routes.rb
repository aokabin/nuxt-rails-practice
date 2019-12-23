Rails.application.routes.draw do
  resources :users

  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  get 'check', to: 'sessions#check'

  get 'items', to: 'items#index'

  root 'pages#index'
end
