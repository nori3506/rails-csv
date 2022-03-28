class AddStatusToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :status, :string, default: "active", after: :id, comment: "Account Status"
  end
end
