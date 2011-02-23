class SurveysController < ApplicationController
  def index
    @surveys = Survey.all(:order => "random()").select { |survey| survey.public? }.first(10)
  end

  def create
    survey = Survey.create!(params[:survey])
    flash[:message] = "Send this page to your friends. This is your only chance -- bookmark it now!"
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
