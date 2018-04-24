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

require 'test_helper'

class SettingMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
