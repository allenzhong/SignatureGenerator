class CreateSignatures < ActiveRecord::Migration[5.1]
  def change
    create_table :signatures do |t|
      t.string :name
      t.string :position
      t.string :telphone
      t.string :email
      t.string :street
      t.string :city
      t.string :postcode
      t.string :country
      t.string :website

      t.timestamps
    end
  end
end
