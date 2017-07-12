require 'rails_helper'

RSpec.describe "signatures/edit", type: :view do
  before(:each) do
    @signature = assign(:signature, Signature.create!())
  end

  it "renders the edit signature form" do
    render

    assert_select "form[action=?][method=?]", signature_path(@signature), "post" do
    end
  end
end
