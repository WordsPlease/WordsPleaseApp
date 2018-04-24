Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :settings, only: %i[show]
    resources :starters, only: %i[index show]
    resources :middles, only: %i[index show]
    resources :finishers, only: %i[index show]
  end

  # root "static_pages#root"
  # will this be the best way to create a tutorial page?
  # root directs to tutorial component and all others are api calls
  # to https://wordsplease/herokuapps.com/api/{api call}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
