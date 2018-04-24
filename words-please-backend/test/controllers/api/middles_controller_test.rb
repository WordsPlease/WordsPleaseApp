require 'test_helper'

class Api::MiddlesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_middles_index_url
    assert_response :success
  end

  test "should get show" do
    get api_middles_show_url
    assert_response :success
  end

end
