class AddColumnsToSignatures < ActiveRecord::Migration[5.1]
  def change
    add_column :signatures, :banner, :string
    add_column :signatures, :banner_link, :string
  end
end
