require 'rails_helper'

RSpec.describe "signatures/show", type: :view do
  before(:each) do
    @signature = assign(:signature, Signature.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
