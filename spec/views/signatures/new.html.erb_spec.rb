require 'rails_helper'

RSpec.describe "signatures/new", type: :view do
  before(:each) do
    assign(:signature, Signature.new())
  end

  it "renders new signature form" do
    render

    assert_select "form[action=?][method=?]", signatures_path, "post" do
    end
  end
end
