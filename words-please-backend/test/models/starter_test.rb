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

require 'test_helper'

class StarterTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
