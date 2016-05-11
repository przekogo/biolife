Rails.application.routes.draw do
  root 'news#index'
  post "news/render_news", to: "news#render_news"

  get 'about', to: 'about#index'
  get 'offer', to: 'offer#index'
  get 'pellet', to: 'pellet#index'
  get 'contact', to: 'contact#index'
end
