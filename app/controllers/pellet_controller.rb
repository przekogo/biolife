class PelletController < ApplicationController

  def index
    @items = []
    [['Pellet', 'about'], ['Proces produkcji', 'manufacturing'], ['Pellet a inne paliwa', 'comparison'], ['Zalety pelletu', 'benefits']].each do |i|
      @items << {label: i[0], file: i[1]}
    end
  end

  def switch
    @partial = params[:partial]
    respond_to do |format|
      format.js
    end
  end

end