class SurveysController < ApplicationController
  def index
  end

  def create
    Survey.create!(params[:survey])
    redirect_to :action => :show
  end
end
