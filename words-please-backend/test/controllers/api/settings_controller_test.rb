require 'test_helper'

class Api::SettingsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_settings_show_url
    assert_response :success
  end

end
