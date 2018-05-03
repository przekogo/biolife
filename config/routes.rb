Rails.application.routes.draw do
  root 'news#index'
  post "news/render_news", to: "news#render_news"

  get 'about', to: 'about#index'
  get 'offer', to: 'offer#index'
  get 'pellet', to: 'pellet#index'
  get 'contact', to: 'contact#index'
  get 'pellets', to: 'offers#pellet'
  get 'furnaces', to: 'offers#furnaces'
  get 'modernization', to: 'offers#modernization'
  get 'burners', to: 'offers#burners'
  get 'granulate', to: 'offers#granulate'

  post 'contact/mail', to: 'contact#mail', format: 'js'
  post 'pellet/switch', to: 'pellet#switch'
end
