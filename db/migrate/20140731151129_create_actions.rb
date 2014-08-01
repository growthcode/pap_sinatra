class CreateActions < ActiveRecord::Migration
  def change
    create_table :actions do |t|
      t.string   :acting_person_title
      t.string   :acting_person
      t.string   :action_statement  #=> the action statement
      t.text     :description  #=> the details
      t.string   :dependent_on  #=> if bottle necked, may not use at all
      t.integer  :priority
      t.integer  :step
      t.text     :note
      t.string   :status #=> is this status complete
      t.belongs_to  :pap

      t.timestamps
    end
  end
end
