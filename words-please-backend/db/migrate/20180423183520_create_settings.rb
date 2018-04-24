class CreateSettings < ActiveRecord::Migration[5.1]
  def change
    create_table :settings do |t|
      t.string :title, null: false
      t.string :image_path

      t.timestamps
    end
  end
end
