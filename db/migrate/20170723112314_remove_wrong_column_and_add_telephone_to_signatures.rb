class RemoveWrongColumnAndAddTelephoneToSignatures < ActiveRecord::Migration[5.1]
  def change
    remove_column :signatures, :telphone, :string
    add_column :signatures, :telephone, :string
  end
end
