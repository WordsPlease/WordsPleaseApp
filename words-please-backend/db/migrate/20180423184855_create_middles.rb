class CreateMiddles < ActiveRecord::Migration[5.1]
  def change
    create_table :middles do |t|
      t.string :title, null: false
      t.string :is_last, null: false
      t.string :image_path
      t.integer :starter_id, null: false

      t.timestamps
    end
  end
end
