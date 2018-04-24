class CreateStarters < ActiveRecord::Migration[5.1]
  def change
    create_table :starters do |t|
      t.string :title, null: false
      t.string :is_last, null: false
      t.string :image_path

      t.timestamps
    end
  end
end
