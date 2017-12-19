class OffersController < ApplicationController

  def pellet ; end

  def furnaces
    @items = []
    [['Kotły', 'furnaces/about'], ['KDC EKO', 'furnaces/eko'], ['KDC EKO DUO', 'furnaces/eko_duo'], ['KDC BIO PELL', 'furnaces/bio_pell']].each do |i|
      @items << {label: i[0], file: i[1]}
    end
    render 'index'
  end

  def modernization ; end

  def burners
    @items = []
    [['Palniki', 'burners/about'], ['Seria VIP', 'burners/vip'], ['Seria UNI', 'burners/uni'], ['Seria UNI MAX', 'burners/unimax'], ['Seria UNI MAX Perfect', 'burners/perfect']].each do |i|
      @items << {label: i[0], file: i[1]}
    end
    render 'index'
  end

  def granulate
    @items = []
    [['Granulat pelletowy', 'granulate/about'], ['Parametry pelletu', 'granulate/parameters'], ['Charakterystyka', 'granulate/characteristics']].each do |i|
      @items << {label: i[0], file: i[1]}
    end
    render 'index'
  end
end
