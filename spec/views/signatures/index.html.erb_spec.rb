require 'rails_helper'

RSpec.describe "signatures/index", type: :view do
  before(:each) do
    assign(:signatures, [
      Signature.create!(),
      Signature.create!()
    ])
  end

  it "renders a list of signatures" do
    render
  end
end
