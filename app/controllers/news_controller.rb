class NewsController < ApplicationController

  def index
    @news = News.order('created_at asc').last(10).reverse
  end

  def render_news
    @article = News.find(params[:news_id])
    respond_to do |format|
      format.js
    end
  end

end