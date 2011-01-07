class AddRandomId < ActiveRecord::Migration
  def self.up
    add_column :surveys, :random_id, :string
  end

  def self.down
    remove_column :surveys, :random_id
  end
end
