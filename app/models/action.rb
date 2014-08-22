class Action < ActiveRecord::Base
  validates :action_statement, presence: true
  validates :description, presence: true
  validates :priority, presence: true
  belongs_to :paps

  def self.update_order(array)
    # array = order[:action]
    array.each_with_index do |action_id, index|
      p act = Action.find(action_id.to_i)
      p act.step = index + 1
      p act.save
    end
  end

  def sibling_count
    Pap.find(self.pap_id).actions.count
  end

  def self.add_1_to_all_steps
    Action.all.each do |action|
      action.step += 1
      action.save
    end
  end

end
