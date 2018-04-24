# == Schema Information
#
# Table name: starters
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  is_last    :string           not null
#  image_path :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Starter < ApplicationRecord
  validates :title, :is_last, presence: true
  validates :title, uniqueness: true

  has_many :middles
end
