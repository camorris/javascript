require 'test_helper'

class SandwichesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sandwiches_index_url
    assert_response :success
  end

  test "should get show" do
    get sandwiches_show_url
    assert_response :success
  end

  test "should get new" do
    get sandwiches_new_url
    assert_response :success
  end

  test "should get create" do
    get sandwiches_create_url
    assert_response :success
  end

  test "should get edit" do
    get sandwiches_edit_url
    assert_response :success
  end

  test "should get update" do
    get sandwiches_update_url
    assert_response :success
  end

  test "should get destroy" do
    get sandwiches_destroy_url
    assert_response :success
  end

end
