# == Schema Information
#
# Table name: middles
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  is_last    :string           not null
#  image_path :string
#  starter_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Middle < ApplicationRecord
  validates :title, :is_last, :starter_id, presence: true
  validates :title, uniqueness: true

  belongs_to :starter
  has_many :finishers
end
