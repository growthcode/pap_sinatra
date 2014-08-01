class Pap < ActiveRecord::Base
  validates :process_name, presence: true
  belongs_to :user
  has_many :actions

end
