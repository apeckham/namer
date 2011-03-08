class Survey < ActiveRecord::Base
  before_create :generate_random_id
  has_many :suggestions, :order => "created_at asc"

  def to_param
    self.random_id
  end

  def generate_random_id
    self.random_id = rand(36**20).to_s(36)
  end
  
  def public?
    not private?
  end
end
