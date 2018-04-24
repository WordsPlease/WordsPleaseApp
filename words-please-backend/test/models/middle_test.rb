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

require 'test_helper'

class MiddleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
