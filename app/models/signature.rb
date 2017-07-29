class Signature < ApplicationRecord
  scope :ordered_by_name, -> {order(:name)}
end
