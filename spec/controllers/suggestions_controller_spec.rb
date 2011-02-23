require 'spec_helper'

describe SuggestionsController do
  it "should allow voting" do
    survey = Survey.create!
    suggestion = survey.suggestions.create!
    expect {
      put :vote, :id => suggestion.to_param
      suggestion.reload
    }.to change(suggestion, :score).by(1)
    response.should redirect_to :controller => :surveys, :action => :show, :id => survey.to_param
  end

end
