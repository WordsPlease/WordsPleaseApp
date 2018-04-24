class Api::FinishersController < ApplicationController
  def index
    @finishers = Setting
                 .find(params[:setting_id])
                 .finishers
                 .where(middle_id: params[:middle_id])
  end

  def show
    @selected_finisher = Finisher.find(params[:id])
  end
end
