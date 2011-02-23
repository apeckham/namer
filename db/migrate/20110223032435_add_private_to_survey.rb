class AddPrivateToSurvey < ActiveRecord::Migration
  def self.up
    add_column :surveys, :private, :boolean
  end

  def self.down
    remove_column :surveys, :private
  end
end