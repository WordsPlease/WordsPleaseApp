class DeleteMembershipsColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :finishers, :setting_memberships_id
  end
end
