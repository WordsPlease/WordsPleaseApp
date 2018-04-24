# == Schema Information
#
# Table name: settings
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  image_path :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Setting < ApplicationRecord
  validates :title, presence: true, uniqueness: true

  has_many :setting_memberships

  has_many :finishers,
    through: :setting_memberships

end
