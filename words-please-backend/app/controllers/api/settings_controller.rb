class Api::SettingsController < ApplicationController
  def show
    @setting = Setting.find(params[:id])
  end
end
