class OffersController < ApplicationController

  def pellet ; end

  def furnaces
    @items = []
    [['Piece', 'furnaces/about'], ['KDC EKO', 'furnaces/eko'], ['KDC EKO DUO', 'furnaces/eko_duo'], ['KDC BIO PELL', 'furnaces/bio_pell']].each do |i|
      @items << {label: i[0], file: i[1]}
    end
    render 'index'
  end

  def modernization ; end

  def burners ; end

  def granulate
    @items = []
    [['Granulat pelletowy', 'granulate/about'], ['Parametry pelletu', 'granulate/parameters'], ['Charakterystyka', 'granulate/characteristics']].each do |i|
      @items << {label: i[0], file: i[1]}
    end
    render 'index'
  end
end