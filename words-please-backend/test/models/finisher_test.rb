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

require 'test_helper'

class FinisherTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
