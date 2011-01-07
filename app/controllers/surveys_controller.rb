class SurveysController < ApplicationController
  def index
  end

  def create
    survey = Survey.create!(params[:survey])
    flash[:message] = "This is your only chance -- Share this page with your friends!"
    redirect_to :action => :show, :id => survey.to_param
  end

  def show
    @survey = Survey.find_by_random_id(params[:id])
    redirect_to(:action => :index) unless @survey
  end

  def suggest
    @survey = Survey.find_by_random_id(params[:id])
    @survey.suggestions.create!(params[:suggestion])
    redirect_to(:action => :show, :id => @survey.to_param)
  end
end
