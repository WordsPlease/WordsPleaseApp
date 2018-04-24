require 'test_helper'

class Api::FinishersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_finishers_index_url
    assert_response :success
  end

  test "should get show" do
    get api_finishers_show_url
    assert_response :success
  end

end
