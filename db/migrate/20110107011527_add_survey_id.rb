class AddSurveyId < ActiveRecord::Migration
  def self.up
    add_column :suggestions, :survey_id, :integer
  end

  def self.down
    remove_column :suggestions, :survey_id
  end
end
