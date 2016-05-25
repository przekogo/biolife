class OffersController < ApplicationController

  def pellet ; end

  def furnaces
    @items = []
    [['Piece', 'furnaces/about'], ['KDC EKO', 'furnaces/eko'], ['KDC EKO DUO', 'furnaces/eko_duo'], ['KDC BIO PELL', 'furnaces/bio_pell']].each do |i|
      @items << {label: i[0], file: i[1]}
    end
  end

  def modernization ; end

  def burners ; end

end