class SuggestionsController < ApplicationController
  def vote
    suggestion = Suggestion.find(params[:id])
    suggestion.increment!(:score)
    redirect_to survey_path suggestion.survey
  end
end
