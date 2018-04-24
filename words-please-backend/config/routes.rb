Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :settings, only: %i[show]
    resources :starters, only: %i[index show]
    resources :middles, only: %i[index show]
    resources :finishers, only: %i[index show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
