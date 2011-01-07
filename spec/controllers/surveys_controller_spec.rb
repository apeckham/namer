require 'spec_helper'

describe SurveysController do
  describe "create" do
    it "should create a survey when form is submitted" do
      expect do
        post :create, :survey => { :what => "a web site", :description => "this web site!"}
        response.should redirect_to :controller => :surveys, :action => :show, :id => Survey.last.to_param
      end.to change(Survey, :count).by(1)
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
  end
end
