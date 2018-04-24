class CreateSettingMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :setting_memberships do |t|
      t.integer :setting_id, null: false
      t.integer :finisher_id, null: false

      t.timestamps
    end
  end
end
