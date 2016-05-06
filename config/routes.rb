Rails.application.routes.draw do
  root 'news#index'
  post "news/render_news", to: "news#render_news"
end
