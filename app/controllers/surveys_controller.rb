class SurveysController < ApplicationController
  def index
  end

  def create
    survey = Survey.create!(params[:survey])
    redirect_to :action => :show, :id => survey.to_param
  end

  def show
    @survey = Survey.find_by_random_id(params[:id])
    redirect_to(:action => :index) unless @survey
  end
end
