# == Schema Information
#
# Table name: finishers
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  is_last    :string           not null
#  image_path :string
#  middle_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Finisher < ApplicationRecord
  validates :title, :is_last, :middle_id, presence: true
  validates :title, uniqueness: true

  has_many :setting_memberships

  belongs_to :middle

  has_many :settings,
    through: :setting_memberships
end
