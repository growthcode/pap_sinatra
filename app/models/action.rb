class Action < ActiveRecord::Base
  validates :action_statement, uniqueness: true, presence: true
  validates :description, uniqueness: true, presence: true
  validates :priority, uniqueness: true, presence: true
  belongs_to :paps

end
