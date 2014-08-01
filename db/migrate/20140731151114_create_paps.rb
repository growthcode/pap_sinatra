class CreatePaps < ActiveRecord::Migration
  def change
      create_table :paps do |t|
        t.string  :process_name
        t.belongs_to  :user

        t.timestamps
    end
  end
end
