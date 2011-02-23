class AddScoreToSuggestions < ActiveRecord::Migration
  def self.up
    add_column :suggestions, :score, :integer, :default => 0, :null => false
  end

  def self.down
    remove_column :suggestions, :score
  end
end
