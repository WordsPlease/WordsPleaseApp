# == Schema Information
#
# Table name: setting_memberships
#
#  id          :integer          not null, primary key
#  setting_id  :integer          not null
#  finisher_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class SettingMembership < ApplicationRecord

  validates :setting_id, :finisher_id, presence: true

  belongs_to :setting,
  foreign_key: :setting_id,
  class_name: :Setting

  belongs_to :finisher,
  foreign_key: :finisher_id,
  class_name: :Finisher
end
