class Action < ActiveRecord::Base
  validates :action_statement, presence: true
  validates :description, presence: true
  validates :priority, presence: true
  belongs_to :paps

end
