require 'spec_helper'

describe SurveysController do
  describe "create" do
    it "should create a survey when form is submitted" do
      expect do
        post :create, :survey => { :what => "a web site", :description => "this web site!"}
        response.should redirect_to :controller => :surveys, :action => :show, :id => Survey.last.id
      end.to change(Survey, :count).by(1)
    end
  end
end
