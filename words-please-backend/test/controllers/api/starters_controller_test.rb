require 'test_helper'

class Api::StartersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_starters_index_url
    assert_response :success
  end

  test "should get show" do
    get api_starters_show_url
    assert_response :success
  end

end
