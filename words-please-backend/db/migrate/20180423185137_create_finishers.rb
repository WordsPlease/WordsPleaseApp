class CreateFinishers < ActiveRecord::Migration[5.1]
  def change
    create_table :finishers do |t|
      t.string :title, null: false
      t.string :is_last, null: false
      t.string :image_path
      t.integer :setting_memberships_id, null: false
      t.integer :middle_id, null: false

      t.timestamps
    end
  end
end
