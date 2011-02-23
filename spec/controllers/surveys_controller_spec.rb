require 'spec_helper'

describe SurveysController do
  it "should create a survey when form is submitted" do
    expect do
      post :create, :survey => {:what => "a web site", :description => "this web site!", :private => "1"}
      response.should redirect_to :controller => :surveys, :action => :show, :id => Survey.last.to_param
    end.to change(Survey, :count).by(1)
    
    Survey.last.should be_private
  end

  it "should look up surveys by random id" do
    survey = Survey.create!
    get :show, :id => survey.to_param
    assigns(:survey).should == survey
  end

  it "should not allow lookups by id" do
    survey = Survey.create!
    get :show, :id => survey.id
    assigns(:survey).should be_nil
  end

  it "should show error if survey is missing" do
    get :show, :id => "aaaaaaaaaaaaaaaaaa"
    response.should redirect_to :controller => :surveys, :action => :index
  end

  it "adds a new suggestion to a survey" do
    survey = Survey.create!
    post :suggest, :suggestion => {:name => "whatchama"}, :id => survey.to_param
    response.should redirect_to :controller => :surveys, :action => :show, :id => survey.to_param
    survey.reload.suggestions.map(&:name).should == ["whatchama"]
  end
end
