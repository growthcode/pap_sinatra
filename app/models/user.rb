class User < ActiveRecord::Base
  validates :email, uniqueness: true, presence: true
  validates :email, presence: true
  has_many :paps
end
