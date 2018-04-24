class Api::StartersController < ApplicationController
  def index
    @starters = Starter.all
  end

  def show
    @starter = Starter.find(params(:id))
  end
end
